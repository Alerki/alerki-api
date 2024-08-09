import { BadRequestException, Injectable } from '@nestjs/common';
import { hash, compareSync } from 'bcryptjs';

import { PrismaService } from '../../../shared/modules/prisma/prisma.service';
import { LogInDto, RegisterDto } from '../dtos/auth.dto';
import { ENV } from 'src/modules/config';
import { StatusEnum } from '../../../shared/enums/status.enum';
import { JwtInternalService } from './internal-jwt.service';

@Injectable()
export class AuthService {
  private hashSalt: number;

  constructor(
    private readonly prismaService: PrismaService,
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
          }
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
        ClientProfiles: {
          create: {
            status: StatusEnum.PUBLISHED,
          }
        },
        date_created: new Date(),
      },
    })
    delete (newUser as { password?: string }).password;
    return newUser;
  }

  async logIn(body: LogInDto, deviceName: string) {
    const user = await this.prismaService.users.findFirst({
      where: {
        status: StatusEnum.PUBLISHED,
        email: body.email,
      },
    });
    if (!user) {
      throw new BadRequestException('User not exists');
    }
    if (!compareSync(body.password, user.password!)) {
      throw new BadRequestException('Bad password');
    }
    const tokens = await this.jwtInternalService.generatePairTokens({
      id: user.id,
    });
    await this.prismaService.sessions.create({
      data: {
        status: StatusEnum.PUBLISHED,
        refreshToken: tokens.refreshToken,
        deviceName,
        Users: user.id
      }
    })
    return tokens;
  }

  async logOut() {}

  async refresh() {}

  async getSessions() {}

  async updateSession() {}

  async deleteSession() {}
}
