import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import type { Response } from 'express';

import { ENV } from '../config';
import { DeviceName } from '../shared/decorators/device-name.decorator';
import { GetCookies } from '../shared/decorators/get-cookie.decorator';
import { LogInDto, RegisterDto } from './dtos/auth.dto';
import { AuthModuleService } from './services/auth-module.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authModuleService: AuthModuleService) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    await this.authModuleService.register(body);
  }

  @Get('log-in')
  async logIn(
    @Res() res: Response,
    @Body() body: LogInDto,
    @DeviceName() deviceName: string,
  ) {
    const tokens = await this.authModuleService.logIn(body, deviceName);

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      expires: ENV.JWT_REFRESH_TOKEN_EXPIRES_IN,
    });

    return {
      accessToken: tokens.accessToken,
    };
  }

  @Get('log-out')
  async logOut(
    @GetCookies('refreshToken') refreshToken: string,
    @Res() res: Response,
  ) {
    await this.authModuleService.logOut(refreshToken);

    res.clearCookie('refreshToken');
  }

  @Get('refresh')
  async refresh(
    @GetCookies('refreshToken') refreshToken: string,
    @Res() res: Response,
  ) {
    const tokens = await this.authModuleService.refresh(refreshToken);

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      expires: ENV.JWT_REFRESH_TOKEN_EXPIRES_IN,
    });

    return {
      accessToken: tokens.accessToken,
    };
  }
}
