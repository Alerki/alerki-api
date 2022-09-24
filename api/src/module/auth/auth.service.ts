import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import Prisma from '@prisma/client';
import * as bcryptjs from 'bcryptjs';

import { PrismaService } from '@Shared/services/prisma.service';
import { UserService } from '@Module/user/user.service';
import { TokensService } from '@Module/auth/tokens.service';
import { SignUp } from '@Module/auth/dto/auth.dto';
import { usernameBlackList } from '@Config/api/username-black-list';
import { SetEnvVariable } from '@Shared/decorators/set-env-variable.decorator';
import { SessionService } from '@Module/auth/session.service';
import { ClientProfileService } from '@Module/profile/client-profile.service';

@Injectable()
export class AuthService {
  /**
   * Slat for password hashing
   */
  @SetEnvVariable('PASSWORD_SALT', 'string')
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
   * @param deviceName device name
   * @returns pair tokens
   */
  async signUp(
    {
      email,
      username,
      password,
    }: SignUp.Dto,
    deviceName: string,
  ) {
    if (!usernameBlackList.has(username.toLowerCase())) {
      throw new BadRequestException('Username bot allowed');
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
      let usernameExists = false;
      let emailExists = false;

      for (let i = 0; i < emailOrUsernameExists.length; i++) {
        if (emailOrUsernameExists[i].username === username) {
          usernameExists = true;
          throw new BadRequestException('Email already exists');
        } else if (emailOrUsernameExists[i].email === email) {
          emailExists = true;
          throw new BadRequestException('Username already exists');
        }
      }
    }

    const hashedPassword = bcryptjs.hashSync(password, this.passwordSalt);

    const newClientProfile = await this.clientProfileService.create();

    await this.userService.create({
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

  async singIn(user: Prisma.User, deviceName: string) {
    const tokens = await this.tokensService.generatePairTokens(
      { id: user.id },
    );

    await this.sessionService.create(user.id, {
      deviceName,
      refreshToken: tokens.refreshToken,
    });

    return tokens;
  }

  async refresh() {}

  async sessions() {}

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
