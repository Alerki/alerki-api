import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { LogInDto, RegisterDto } from './dtos/auth.dto';
import { AuthService } from './service/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { DeviceName } from '../../shared/decorators/device-name.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }

  @Post('log-in')
  async logIn(
    @Body() body: LogInDto,
    @DeviceName() deviceName: string,
  ) {
    return this.authService.logIn(body, deviceName);
  }

  @Get('log-out')
  async logOut() {}

  @Get('refresh')
  async refresh() {}

  @Get('sessions')
  async getSessions() {}

  @Patch('sessions/:id')
  async updateSession() {}

  @Delete('sessions/:id')
  async deleteSession() {}
}
