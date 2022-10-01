/* eslint-disable max-len */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe ,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBody,
  ApiOperation,
  ApiHeader,
  ApiQuery,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import Prisma from '@prisma/client';
import {
  Request,
  Response,
} from 'express';

import {
  SignInDto,
  SignUpDto,
} from './dto/auth.dto';
import { LocalAuthGuard } from '@Module/auth/local-auth.guard';
import { AuthService } from '@Module/auth/auth.service';
import { DeviceName } from '@Shared/decorators/device-name.decorator';
import { JwtTokensPair } from '@Module/auth/tokens.service';
import { JwtAuthGuard } from '@Module/auth/jwt-auth.guard';
import { GetCookies } from '@Shared/decorators/get-cookies.decorator';
import { ProtectedRequest } from '@Module/auth/interface/protected-request.interface';
import { GetSessionsQueryDto, PatchSessionBodyDto } from '@Module/auth/dto/session.dto';
import { AuthGuard } from '@nestjs/passport';
import { GoogleUser } from '@Module/auth/google.strategy';

/**
 * Send refresh and access tokens
 * @param res response
 * @param param1 pair tokens
 */
function sendRefreshAndAccessTokens(
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

/**
 * Authentication authorization controller
 */
@ApiTags('Authentication / authorization')
@Controller('auth')
export class AuthController {
  /**
   * Auth controller constructor
   *
   * @param authService auth service
   */
  constructor(
    private readonly authService: AuthService,
  ) {}

  /**
   * Sign-up
   *
   * @param res response
   * @param body sign-up required data
   */
  @ApiOperation({ description: 'Sign-up' })
  @ApiCreatedResponse({ description: 'Successful registration' })
  @ApiBadRequestResponse({ description: 'Username or email already exists' })
  @Post('sign-up')
  async signUp(
    @Res() res: Response,
    @Body() body: SignUpDto,
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
  @ApiOkResponse({ description: 'Successful log-in' })
  @ApiBadRequestResponse({ description: 'Bad password' })
  @ApiNotFoundResponse({ description: 'Username or email not exists' })
  @ApiBody({ description: 'Sign-in body', type: SignInDto })
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

    sendRefreshAndAccessTokens(res, tokens);
  }

  /**
   * Sign in/up with Google OAuth2.0
   *
   * @param req request
   */
  @ApiOperation({ description: 'Sign in/up with Google OAuth2.0' })
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async google(@Req() req: Request) {}

  /**
   * Google OAuth2.0 callback
   *
   * @param req request
   * @param res response
   * @param deviceName device name
   */
  @ApiOperation({ description: 'Google OAuth2.0 callback' })
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleCallback(
    @Req() req: Request,
    @Res() res: Response,
    @DeviceName() deviceName: string,
  ) {
    const tokens = await this.authService.signInWithGoogle({
      deviceName,
      user: req.user as GoogleUser,
    });

    sendRefreshAndAccessTokens(res, tokens);
  }

  /**
   *  Log-out
   *
   * @param req request
   * @param res response
   * @param refreshToken refresh token
   */
  @ApiOperation({ description: 'Log-out' })
  @ApiOkResponse({ description: 'Log-out user' })
  @ApiUnauthorizedResponse({ description: 'User unauthorized or has a bad access token' })
  @UseGuards(JwtAuthGuard)
  @Get('log-out')
  async logOut(
    @Req() req: ProtectedRequest,
    @Res() res: Response,
    @GetCookies('refreshToken') refreshToken: string,
  ) {
    await this.authService.logOut({ userId: req.user.id, refreshToken });

    res.clearCookie('refreshToken');

    res.sendStatus(200);
  }

  /**
   * Refresh token
   *
   * @param res response
   * @param refreshToken refresh token
   */
  @ApiOperation({ description: 'Refresh token' })
  @ApiHeader({ name: 'Authorization', required: true })
  @ApiOkResponse({ description: 'Successful refresh token' })
  @ApiBadRequestResponse({ description: 'No refresh token' })
  @Get('refresh')
  async refresh(
    @Res() res: Response,
    @GetCookies('refreshToken') refreshToken: string,
  ) {
    const tokens = await this.authService.refresh({ refreshToken });

    sendRefreshAndAccessTokens(res, tokens);
  }

  /**
   * Get sessions list
   *
   * @param req request
   * @param queries queries
   * @returns sessions
   */
  @ApiOperation({ description: 'Get sessions list' })
  @ApiHeader({ name: 'Authorization', required: true })
  @ApiOkResponse({ description: 'Get sessions' })
  @ApiQuery({ name: 'page', description: 'Sessions page', type: 'number', required: false })
  @ApiQuery({ name: 'limit', description: 'Sessions page limit', type: 'number', required: false })
  @UseGuards(JwtAuthGuard)
  @Get('sessions')
  async getSessions(
    @Req() req: ProtectedRequest,
    @Query() queries: GetSessionsQueryDto,
  ) {
    const sessions = this.authService.getSessions({
      userId: req.user.id,
      page: queries.page,
      limit: queries.limit,
    });

    return sessions;
  }

  /**
   * Patch session
   *
   * @param body patch session body
   * @param id session ID
   * @returns updated session
   */
  @ApiOperation({ description: 'Patch session' })
  @ApiHeader({ name: 'Authorization', required: true })
  @ApiOkResponse({ description: 'Session patched successfully' })
  @ApiBadRequestResponse({ description: 'Session with specified ID not exists' })
  @UseGuards(JwtAuthGuard)
  @Patch('sessions/:id')
  async patchSessions(
    @Body() body: PatchSessionBodyDto,
    @Param('id') id: string,
  ) {
    const session = await this.authService.patchSession({
      deviceName: body.deviceName,
      id,
    });

    return session;
  }

  /**
   * Delete session
   *
   * @param id session id
   */
  @ApiOperation({ description: 'Delete session' })
  @ApiHeader({ name: 'Authorization', required: true })
  @ApiOkResponse({ description: 'Session deleted successfully' })
  @ApiBadRequestResponse({ description: 'Session with specified ID not exists' })
  @UseGuards(JwtAuthGuard)
  @Delete('sessions/:id')
  async deleteSession(
    @Param('id') id: string,
  ) {
    await this.authService.deleteSession({ id });
    return;
  }
}
