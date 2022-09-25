/* eslint-disable max-len */
import { BadRequestException, Body, Controller, Get, HttpStatus, Post, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ApiTags,
  ApiResponse,
  ApiBody,
  ApiOperation,
  ApiBearerAuth,
  ApiHeader,
  ApiOAuth2,
  ApiCookieAuth,
} from '@nestjs/swagger';
import Prisma from '@prisma/client';
import {
  Request,
  Response,
} from 'express';

import {
  SignIn,
  SignUp,
} from './dto/auth.dto';
import { LocalAuthGuard } from '@Module/auth/local-auth.guard';
import { AuthService } from '@Module/auth/auth.service';
import { DeviceName } from '@Shared/decorators/device-name.decorator';
import { JwtTokensPair } from '@Module/auth/tokens.service';
import { JwtAuthGuard } from '@Module/auth/jwt-auth.guard';
import { GetCookies } from '@Shared/decorators/get-cookies.decorator';

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
  @ApiOperation({ description: 'Sign-up' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Successful registration' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Username or email already exists' })
  @Post('sign-up')
  async signUp(
    @Res() res: Response,
    @Body() body: SignUp.SignUpDto,
  ) {
    await this.authService.signUp(body);

    res.sendStatus(201);
  }

  /**
   * Sign-in
   *
   * @param req request
   * @param res response
   * @param deviceName device name
   */
  @ApiOperation({ description: 'Sign-in' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Successful log-in' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad password' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Username or email not exists' })
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

  @ApiOperation({ description: 'Log-out' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Log-out user' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'User unauthorized or has a bad access token' })
  @UseGuards(JwtAuthGuard)
  @Get('log-out')
  async logOut(
    @Req() req: Request,
    @Res() res: Response,
    @GetCookies('refreshToken') refreshToken: string,
  ) {
    await this.authService.logOut({ userId: (req.user as any).id, refreshToken });

    res.clearCookie('refreshToken');

    res.sendStatus(200);
  }

  @Get('refresh')
  async refresh(
    @Res() res: Response,
    @GetCookies('refreshToken') refreshToken: string,
  ) {
    if (!refreshToken) {
      throw new BadRequestException('Refresh token not exists');
    }

    const tokens = await this.authService.refresh({ refreshToken });

    this.sendRefreshAndAccessTokens(res, tokens);
  }

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
