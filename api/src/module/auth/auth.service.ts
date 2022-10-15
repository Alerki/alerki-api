import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import Prisma from '@prisma/client';
import axios from 'axios';
import * as bcryptjs from 'bcryptjs';
import * as ImageSize from 'buffer-image-size';
import * as sharp from 'sharp';

import { usernameBlackListSet } from '@Config/api/username-black-list';
import { SignUpDto } from '@Module/auth/dto/auth.dto';
import { GoogleUser } from '@Module/auth/google.strategy';
import { RoleService } from '@Module/auth/role.service';
import { SessionService } from '@Module/auth/session.service';
import { TokensService } from '@Module/auth/tokens.service';
import { ClientProfileService } from '@Module/profile/client-profile.service';
import { UserPictureService } from '@Module/user/user-picture.service';
import { UserService } from '@Module/user/user.service';
import { SetEnvVariable } from '@Shared/decorators/set-env-variable.decorator';

@Injectable()
export class AuthService {
  /**
   * Slat for password hashing
   */
  @SetEnvVariable('PASSWORD_SALT', 'number')
  private readonly passwordSalt: string;

  /**
   * Constructor
   *
   * @param userService user service
   * @param tokensService token service
   * @param sessionService session service
   * @param clientProfileService client profile service
   */
  constructor(
    private readonly userService: UserService,
    private readonly tokensService: TokensService,
    private readonly sessionService: SessionService,
    private readonly clientProfileService: ClientProfileService,
    private readonly userPictureService: UserPictureService,
    private readonly roleService: RoleService,
  ) { }

  /**
   * Sign-up user
   *
   * @param param0 sign-up data
   * @returns pair tokens
   */
  async signUp(
    {
      email,
      username,
      password,
    }: SignUpDto,
  ) {
    if (usernameBlackListSet.has(username.toLowerCase())) {
      throw new BadRequestException('Username not allowed');
    }

    const emailOrUsernameExists = await this.userService.findMany({
      where: {
        OR: [
          {
            email,
          },
          {
            username,
          },
        ],
      },
    });

    if (emailOrUsernameExists.length !== 0) {
      for (let i = 0; i < emailOrUsernameExists.length; i++) {
        if (emailOrUsernameExists[i].username === username) {
          throw new BadRequestException('Email already exists');
        } else if (emailOrUsernameExists[i].email === email) {
          throw new BadRequestException('Username already exists');
        }
      }
    }

    const hashedPassword = bcryptjs.hashSync(password, this.passwordSalt);

    const newClientProfile = await this.clientProfileService.create();

    const clientRole: Prisma.Roles = 'client';

    await this.userService.create({
      data: {
        email: email.toLowerCase(),
        username,
        password: hashedPassword,
        roles: ['client'],
        clientProfile: {
          connect: {
            id: newClientProfile.id,
          },
        },
      },
    });
  }

  async signInWithGoogle({
    deviceName,
    user,
  }: {
    deviceName: string,
    user: GoogleUser,
  }) {
    const {
      email,
      firstName,
      lastName,
      picture,
    } = user;

    const candidate = await this.userService.findFirst({
      where: {
        email: email,
      },
    });

    if (candidate) {
      const tokens = await this.tokensService.generatePairTokens(
        { id: candidate.id },
      );

      await this.sessionService.create({
        userId: candidate.id,
        refreshToken: tokens.refreshToken,
        deviceName,
      });

      return tokens;
    } else {
      let usernameCandidate = email.split('@')[0];

      // Generate unique username
      while (true) {
        const checkUsernameExists = await this.userService.findFirst({
          where: {
            username: usernameCandidate,
          },
        });

        if (checkUsernameExists) {
          usernameCandidate += '_';
          continue;
        }

        break;
      }

      // Download and prepare picture if exists
      let pictureId: string;

      try {
        if (typeof picture == 'string') {
          // Download image
          const image = await axios.get(
            picture,
            { responseType: 'arraybuffer' },
          );

          // Convert data to buffer
          let imageBuffer = Buffer.from(image.data, 'utf8');

          // Check picture size and resize if required
          const { width, height } = ImageSize(imageBuffer);

          if (width > 200 || height > 200) {
            imageBuffer = await sharp(imageBuffer)
              .resize(50, 50)
              .jpeg({ mozjpeg: true })
              .toBuffer();
          }

          // Create new picture
          const userPicture = await this.userPictureService.create({
            data: {
              picture: imageBuffer,
            },
          });

          pictureId = userPicture.id;
        }
      } catch (e: any) {
        /* istanbul ignore next */
        console.error(e);
      }

      // Create new client profile
      const newClientProfile = await this.clientProfileService.create();

      const clientRole = this.roleService.clientRole;

      // Create new user
      const newUser = await this.userService.create({
        data: {
          email,
          username: usernameCandidate,
          firstName,
          lastName,
          clientProfile: {
            connect: {
              id: newClientProfile.id,
            },
          },
          roles: [clientRole],
          picture: pictureId ? {
            connect: {
              id: pictureId,
            },
          } : undefined,
        },
      });

      // Generate tokens
      const tokens = await this.tokensService.generatePairTokens(
        { id: newUser.id },
      );

      // Save auth session
      await this.sessionService.create({
        userId: newUser.id,
        refreshToken: tokens.refreshToken,
        deviceName,
      });

      return tokens;
    }
  }

  async singIn(user: Prisma.User, deviceName: string) {
    const tokens = await this.tokensService.generatePairTokens(
      { id: user.id },
    );

    await this.sessionService.create({
      userId: user.id,
      deviceName,
      refreshToken: tokens.refreshToken,
    });

    return tokens;
  }

  async logOut(
    {
      userId,
      refreshToken,
    }: Pick<Prisma.AuthSession, 'userId' | 'refreshToken'>,
  ) {
    const candidate = await this.sessionService.findFirst({
      where: {
        userId,
        refreshToken,
      },
    });

    if (candidate) {
      await this.sessionService.delete({
        where: {
          id: candidate.id,
        },
      });
    }
  }

  async refresh({ refreshToken }: Pick<Prisma.AuthSession, 'refreshToken'>) {
    if (!refreshToken) {
      throw new BadRequestException('No refresh token');
    }

    if (refreshToken.split('.').length !== 3) {
      throw new UnauthorizedException('Bad refresh token');
    }

    let validToken;

    try {
      validToken = this.tokensService.verifyRefreshToken(refreshToken);
    } catch (e: any) {
      throw new UnauthorizedException('Bad refresh token');
    }

    const candidate = await this.sessionService.findFirst({
      where: {
        userId: validToken.id,
        refreshToken,
      },
    });

    if (!candidate) {
      throw new BadRequestException('Refresh token not exists');
    }

    const tokens = await this.tokensService.generatePairTokens(
      { id: validToken.id },
    );

    await this.sessionService.update(
      candidate.id, { refreshToken: tokens.refreshToken },
    );

    return tokens;
  }

  async getSessions({
    userId,
    page,
    limit,
  }: Pick<Prisma.AuthSession, 'userId'> & {
    page: number,
    limit: number,
  }) {
    return this.sessionService.findMany({
      where: {
        userId,
      },
      skip: page * limit,
      take: limit,
    });
  }

  async patchSession({
    deviceName,
    id,
  }: Pick<Prisma.AuthSession, 'id' | 'deviceName'>) {
    const candidate = await this.sessionService.findFirst({
      where: {
        id,
      },
    });

    if (!candidate) {
      throw new BadRequestException('Session with specified ID not exists');
    }

    return this.sessionService.update(id, {
      deviceName,
    });
  }

  async deleteSession({
    id,
  }: Pick<Prisma.AuthSession, 'id'>) {
    const candidate = await this.sessionService.findFirst({
      where: {
        id,
      },
    });

    if (!candidate) {
      throw new BadRequestException('Session with specified ID not exists');
    }

    return await this.sessionService.delete({
      where: {
        id,
      },
    });
  }

  async validateUser(usernameOrEmail: string, inputPassword: string) {
    const candidate = await this.userService.findFirst({
      where: {
        OR: [
          {
            username: usernameOrEmail,
          },
          {
            email: usernameOrEmail,
          },
        ],
      },
    });

    if (!candidate) {
      return 'User not exists';
    }

    if (!bcryptjs.compareSync(inputPassword, candidate.password)) {
      return 'Bad password';
    }

    return candidate;
  }
}
