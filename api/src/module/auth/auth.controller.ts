import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import Prisma from '@prisma/client';
import {
  Response,
} from 'express';

import { PrismaService } from '@Shared/services/prisma.service';
import { UserService } from '@Module/user/user.service';
import {
  SignIn,
  SignUp,
} from './dto/auth.dto';
import { LocalAuthGuard } from '@Module/auth/local-auth.guard';
import { AuthService } from '@Module/auth/auth.service';
import { DeviceName } from '@Shared/decorators/device-name.decorator';
import { JwtTokensPair } from '@Module/auth/tokens.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  /**
   * Sign-up new user
   *
   * @param body required data to register user
   */
  @Post('sign-up')
  async signUp(
    @Res() res: Response,
    @Body() body: SignUp.Dto,
    @DeviceName() deviceName: string,
  ) {
    await this.authService.signUp(body, deviceName);

    res.sendStatus(201);
  }

  /**
   * Sign-in user
   *
   * @param body
   * @param user
   * @param res
   * @param deviceName
   */
  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  async signIn(
    @Body() body: SignIn.Dto,
    @Body('user') user: Prisma.User,
    @Res() res: Response,
    @DeviceName() deviceName: string,
  ) {
    // @ts-ignore
    const tokens = await this.authService.singIn({
      user,
      deviceName,
    });

    this.sendRefreshAndAccessTokens(res, tokens);
  }

  @Get('log-out')
  async logOut() {}

  @Get('refresh')
  async refresh() {}

  @Get('sessions')
  async sessions() {}

  /**
   * Send refresh and access tokens
   * @param res
   * @param param1
   */
  sendRefreshAndAccessTokens(
    res: Response,
    { refreshToken, accessToken }: JwtTokensPair,
  ) {
    res.cookie(
      'refreshToken',
      refreshToken,
      {
        maxAge: 30 * 24 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: true,
      },
    );

    res.status(200).json({
      accessToken,
    });
  }
}
