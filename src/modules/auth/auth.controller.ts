import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './service/auth.service';
import {
  LogInDto,
  LogOutDto,
  RegisterDto,
  UpdateSessionDto,
} from './dtos/auth.dto';
import { DeviceName } from '../../shared/decorators/device-name.decorator';
import { JwtAuthGuard } from './guards/jwt.guard';
import { GetUserFromRequest } from '../../shared/decorators/get-user-from-request.decorator';
import { JWTData } from './auth.interface';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }

  @Post('log-in')
  async logIn(@Body() body: LogInDto, @DeviceName() deviceName: string) {
    return await this.authService.logIn(body, deviceName);
  }

  @Delete('log-out')
  async logOut(@Body() { refreshToken }: LogOutDto) {
    return this.authService.logOut(refreshToken);
  }

  @Post('refresh')
  async refresh(@Body() { refreshToken }: LogOutDto) {
    return this.authService.refresh(refreshToken);
  }

  @UseGuards(JwtAuthGuard)
  @Get('sessions')
  async getSessions(@GetUserFromRequest() { id }: JWTData) {
    return this.authService.getSessions(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('sessions/:id')
  async updateSession(
    @GetUserFromRequest() { id: userId }: JWTData,
    @Param('id') sessionId: string,
    @Body() body: UpdateSessionDto,
  ) {
    return this.authService.updateSession(userId, sessionId, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('sessions/:id')
  async deleteSession(
    @GetUserFromRequest() { id: userId }: JWTData,
    @Param('id') sessionsId: string,
  ) {
    return this.authService.deleteSession(userId, sessionsId)
  }
}
