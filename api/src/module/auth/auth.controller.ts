import { Body, Controller, Get, Post, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ApiTags,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';
import Prisma from '@prisma/client';
import {
  Request,
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

@ApiTags('Authentication / authorization')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  /**
   * Sign-up
   *
   * @param res response
   * @param body sign-up required data
   * @param deviceName device name
   */
  @ApiResponse({ status: 201, description: 'Successful registration' })
  @ApiResponse({ status: 400, description: 'Username or email already exists' })
  @Post('sign-up')
  async signUp(
    @Res() res: Response,
    @Body() body: SignUp.SignUpDto,
    @DeviceName() deviceName: string,
  ) {
    await this.authService.signUp(body, deviceName);

    res.sendStatus(201);
  }

  /**
   * Sign-in
   *
   * @param req request
   * @param res response
   * @param deviceName device name
   */
  @ApiResponse({ status: 200, description: 'Successful log-in' })
  @ApiResponse({ status: 400, description: 'Bad password' })
  @ApiResponse({ status: 404, description: 'Username or email not exists' })
  @ApiBody({ description: 'Sign-in body', type: SignIn.SignInDto })
  @UsePipes(ValidationPipe)
  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  async signIn(
    @Req() req: Request,
    @Res() res: Response,
    @DeviceName() deviceName: string,
  ) {
    const tokens = await this.authService.singIn(
      req.user as Prisma.User, deviceName,
    );

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
