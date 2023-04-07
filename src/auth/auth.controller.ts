import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import type { Response } from 'express';

import { ENV } from '../config';
import { DeviceName } from '../shared/decorators/device-name.decorator';
import { GetCookies } from '../shared/decorators/get-cookie.decorator';
import { LogInDto, RegisterDto } from './dtos/auth.dto';
import { AuthModuleService } from './services/auth-module.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authModuleService: AuthModuleService) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    await this.authModuleService.register(body);
  }

  @Post('log-in')
  async logIn(
    @Res() res: Response,
    @Body() body: LogInDto,
    @DeviceName() deviceName: string,
  ) {
    const tokens = await this.authModuleService.logIn(body, deviceName);

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      maxAge: ENV.JWT_REFRESH_TOKEN_EXPIRES_IN,
    });

    res.json({
      accessToken: tokens.accessToken,
    });
  }

  @Get('log-out')
  async logOut(
    @Res() res: Response,
    @GetCookies('refreshToken') refreshToken: string,
  ) {
    await this.authModuleService.logOut(refreshToken);

    res.clearCookie('refreshToken');

    res.sendStatus(HttpStatus.OK);
  }

  @Get('refresh')
  async refresh(
    @Res() res: Response,
    @GetCookies('refreshToken') refreshToken: string,
  ) {
    const tokens = await this.authModuleService.refresh(refreshToken);

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      maxAge: ENV.JWT_REFRESH_TOKEN_EXPIRES_IN,
    });

    res.json({
      accessToken: tokens.accessToken,
    });
  }
}
