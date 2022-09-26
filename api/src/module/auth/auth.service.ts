import {
  BadRequestException,
  Injectable,
  Req,
} from '@nestjs/common';
import Prisma from '@prisma/client';
import * as bcryptjs from 'bcryptjs';

import { UserService } from '@Module/user/user.service';
import { TokensService } from '@Module/auth/tokens.service';
import { SignUpDto } from '@Module/auth/dto/auth.dto';
import { usernameBlackListSet } from '@Config/api/username-black-list';
import { SetEnvVariable } from '@Shared/decorators/set-env-variable.decorator';
import { SessionService } from '@Module/auth/session.service';
import { ClientProfileService } from '@Module/profile/client-profile.service';
import { Request } from 'express';
import { Profile } from 'passport-google-oauth20';
import { GoogleUser } from '@Module/auth/google.strategy';

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
  ) {}

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

    const newUser = await this.userService.create({
      data: {
        email,
        username,
        password: hashedPassword,
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
      accessToken,
      refreshToken,
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
      const newClientProfile = await this.clientProfileService.create();

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
        },
      });

      const tokens = await this.tokensService.generatePairTokens(
        { id: newUser.id },
      );

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

    const validToken = this.tokensService.verifyRefreshToken(refreshToken);

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
