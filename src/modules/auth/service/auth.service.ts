import { BadRequestException, Injectable } from '@nestjs/common';
import { hash, compareSync } from 'bcryptjs';

import { CommonPrismaService } from '../../../shared/modules/prisma/prisma.service';
import { LogInDto, RegisterDto, UpdateSessionDto } from '../dtos/auth.dto';
import { ENV } from 'src/modules/config';
import { StatusEnum } from '../../../shared/enums/status.enum';
import { JwtInternalService } from './internal-jwt.service';

@Injectable()
export class AuthService {
  private hashSalt: number;

  constructor(
    private readonly prismaService: CommonPrismaService,
    private readonly jwtInternalService: JwtInternalService,
  ) {
    this.hashSalt = ENV.PASSWORD_HASH;
  }

  async register(body: RegisterDto) {
    const user = await this.prismaService.users.findFirst({
      where: {
        OR: [
          {
            email: body.email.toLowerCase(),
          },
          {
            username: body.username.toLowerCase(),
          },
        ],
      },
    });
    if (user) {
      if (user.email === body.email.toLowerCase()) {
        throw new BadRequestException('Email already exists');
      } else {
        throw new BadRequestException('Username already exists');
      }
    }

    const hashedPassword = await hash(body.password, this.hashSalt);

    const newUser = await this.prismaService.users.create({
      data: {
        status: StatusEnum.PUBLISHED,
        email: body.email.toLowerCase(),
        username: body.username,
        password: hashedPassword,
        ClientProfile: {
          create: {
            status: StatusEnum.PUBLISHED,
          },
        },
        date_created: new Date(),
      },
    });

    delete (newUser as { password?: string }).password;

    return newUser;
  }

  async logIn(body: LogInDto, deviceName: string) {
    const user = await this.processLogInRequest(body.email, body.password);
    const tokens = await this.jwtInternalService.generatePairTokens({
      id: user.id,
    });

    await this.prismaService.sessions.create({
      data: {
        status: StatusEnum.PUBLISHED,
        refreshToken: tokens.refreshToken,
        deviceName,
        UserId: user.id,
      },
    });

    return tokens;
  }

  async logOut(refreshToken: string) {
    const parsedToken =
      await this.jwtInternalService.validateRefreshToken(refreshToken);
    if (!parsedToken) {
      throw new BadRequestException();
    }

    const session = await this.prismaService.sessions.findFirst({
      where: {
        UserId: parsedToken.id,
        refreshToken,
        status: StatusEnum.PUBLISHED,
      },
    });
    if (session) {
      await this.prismaService.sessions.delete({
        where: {
          id: session.id,
        },
      });
    } else {
      throw new BadRequestException('Session is not exists');
    }
  }

  async refresh(refreshToken: string) {
    const validatedToken =
      await this.jwtInternalService.validateRefreshToken(refreshToken);
    if (!validatedToken) {
      throw new BadRequestException('Invalid refresh token');
    }

    const session = await this.prismaService.sessions.findFirst({
      where: {
        refreshToken,
        status: StatusEnum.PUBLISHED,
      },
    });
    if (!session) {
      throw new BadRequestException('Session does not exists');
    }

    await this.prismaService.sessions.delete({
      where: {
        id: session.id,
      },
    });

    const user = await this.prismaService.users.findFirst({
      where: {
        id: validatedToken.id,
      },
    });
    if (!user) {
      throw new BadRequestException('User does not exists');
    }

    const tokens = await this.jwtInternalService.generatePairTokens({
      id: user.id,
    });
    await this.prismaService.sessions.create({
      data: {
        status: StatusEnum.PUBLISHED,
        refreshToken: tokens.refreshToken,
        deviceName: session.deviceName,
        UserId: user.id,
      },
    });

    return tokens;
  }

  async getSessions(userId: string) {
    return this.prismaService.sessions.findMany({
      where: {
        UserId: userId,
        status: StatusEnum.PUBLISHED,
      },
    });
  }

  async updateSession(
    userId: string,
    sessionId: string,
    body: UpdateSessionDto,
  ) {
    const session = await this.prismaService.sessions.findFirst({
      where: {
        id: sessionId,
        status: StatusEnum.PUBLISHED,
        UserId: userId,
      },
    });
    if (!session) {
      throw new BadRequestException('Session does not exists');
    }

    return this.prismaService.sessions.update({
      where: {
        id: sessionId,
      },
      data: {
        deviceName: body.deviceName,
      },
    });
  }

  async deleteSession(userId: string, sessionId: string) {
    const session = await this.prismaService.sessions.findFirst({
      where: {
        id: sessionId,
        status: StatusEnum.PUBLISHED,
        UserId: userId,
      },
    });
    if (!session) {
      throw new BadRequestException('Session does not exists');
    }

    await this.prismaService.sessions.delete({
      where: {
        id: session.id,
      },
    });
  }

  async processLogInRequest(email: string, password: string) {
    const user = await this.prismaService.users.findFirst({
      where: {
        status: StatusEnum.PUBLISHED,
        email,
      },
    });

    if (!user) {
      throw new BadRequestException('User not exists');
    }
    if (!compareSync(password, user.password!)) {
      throw new BadRequestException('Bad password');
    }

    return user;
  }
}
