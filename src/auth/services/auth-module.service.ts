import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';
import { PrismaService } from 'src/shared/modules/prisma/prisma.service';

import { ENV } from '../../config';
import { LogInDto, RegisterDto } from '../dtos/auth.dto';
import { IJwtTokenData } from '../interfaces';
import { JwtTokenService } from './jwt-token.service';
import { SessionService } from './session.service';

@Injectable()
export class AuthModuleService {
  private readonly passwordHash: number;

  constructor(
    private readonly jwtTokensService: JwtTokenService,
    private readonly sessionService: SessionService,
    private readonly prismaService: PrismaService,
  ) {
    this.passwordHash = ENV.PASSWORD_HASH;
  }

  async register(data: RegisterDto) {
    const candidate = await this.prismaService.user.findFirst({
      where: {
        OR: [
          {
            email: data.email,
          },
          {
            username: data.username,
          },
        ],
      },
    });

    if (candidate) {
      if (candidate.email == data.email) {
        throw new BadRequestException('Email already exists');
      } else {
        throw new BadRequestException('Username already exists');
      }
    }

    const clientProfile = await this.prismaService.clientProfile.create({
      data: {},
    });

    const passwordHash = bcryptjs.hashSync(data.password, this.passwordHash);

    await this.prismaService.user.create({
      data: {
        email: data.email,
        username: data.username,
        password: passwordHash,
        clientProfile: clientProfile.id,
      },
    });
  }

  async logIn(data: LogInDto, deviceName: string) {
    const candidate = await this.prismaService.user.findFirst({
      where: {
        OR: [
          {
            email: data.username,
          },
          {
            username: data.username,
          },
        ],
      },
      include: {
        User_UserRoles: {
          include: {
            UserRoles: true,
          },
        },
      },
    });

    if (!candidate) {
      throw new BadRequestException('Bad email or password');
    }

    if (!bcryptjs.compareSync(data.password, candidate.password)) {
      throw new BadRequestException('Wrong password');
    }

    const roles = candidate?.User_UserRoles?.map(
      (User_UserRoles) => User_UserRoles.UserRoles?.name,
    );

    const tokens = await this.jwtTokensService.generatePairTokens({
      id: candidate.id,
      roles,
    });

    await this.prismaService.session.create({
      data: {
        refreshToken: tokens.refreshToken,
        deviceName,
        User_Session: {
          create: {
            User_id: candidate.id,
          },
        },
      },
    });

    return tokens;
  }

  async logOut(refreshToken: string) {
    let decodedRefreshToken: IJwtTokenData;

    try {
      decodedRefreshToken =
        await this.jwtTokensService.validateRefreshToken(refreshToken);
    } catch (e) {
      throw new BadRequestException('Bad refresh token');
    }

    const sessionCandidate = await this.sessionService.findExists({
      where: {
        refreshToken,
        User_Session: {
          some: {
            User_id: decodedRefreshToken.id,
          },
        },
      },
    });

    await this.sessionService.delete({
      where: {
        id: sessionCandidate.id,
      },
    });
  }

  async refresh(refreshToken: string) {
    let decodedRefreshToken: IJwtTokenData;

    try {
      decodedRefreshToken =
        await this.jwtTokensService.validateAccessToken(refreshToken);
    } catch (e) {
      throw new BadRequestException('Bad refresh token');
    }

    const sessionCandidate = await this.sessionService.findExists({
      where: {
        refreshToken,
        User_Session: {
          some: {
            User_id: decodedRefreshToken.id,
          },
        },
      },
      include: {
        User_Session: {
          include: {
            User: {
              include: {
                User_UserRoles: {
                  include: {
                    UserRoles: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!sessionCandidate) {
      throw new BadRequestException('Session not exists');
    }

    const roles = sessionCandidate.User_Session?.[0]?.User?.User_UserRoles?.map(
      (User_UserRoles) => User_UserRoles.UserRoles?.name,
    );

    const tokens = await this.jwtTokensService.generatePairTokens({
      id: decodedRefreshToken.id,
      roles,
    });

    await this.sessionService.update({
      where: {
        id: sessionCandidate.id,
      },
      data: {
        refreshToken: tokens.refreshToken,
      },
    });

    return tokens;
  }
}
