import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ProtectedRequest } from '../auth/interfaces/protected-request.interface';
import { UserModuleService } from './services/user.module.service';

@Controller('user')
export class UserController {
  constructor(private readonly userModuleService: UserModuleService) {}

  @UseGuards(JwtAuthGuard)
  @Get('')
  async getProtectedUser(@Req() req: ProtectedRequest) {
    return this.userModuleService.getProtectedUser(req.user);
  }

  @Get(':username')
  async getUser(@Param('username') username: string) {
    return this.userModuleService.getUser(username);
  }
}
