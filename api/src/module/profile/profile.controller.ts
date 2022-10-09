import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Patch,
  Req,
  UseGuards,
  UseInterceptors ,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';

import { JwtAuthGuard } from '@Module/auth/jwt-auth.guard';
import { ProtectedRequest } from '@Module/auth/interface/protected-request.interface';
import { ProfileService } from '@Module/profile/profile.service';

@Controller('profile')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Patch('enable-master')
  async enableMaster(
    @Req() req: ProtectedRequest,
  ) {
    const { user: { id } } = req;

    await this.profileService.enableMaster({ id });
  }

  @UseGuards(JwtAuthGuard)
  @Patch('disable-master')
  async disableMaster(
    @Req() req: ProtectedRequest,
  ) {
    const { user: { id } } = req;

    await this.profileService.disableMaster({ id });
  }
}
