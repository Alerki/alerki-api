import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { IJwtTokenData } from '../auth/interfaces';
import { ProtectedRequest } from '../auth/interfaces/protected-request.interface';
import { GetUserFromRequest } from '../shared/decorators/get-user-from-request.decorator';
import {
  CreateMasterServiceDto,
  UpdateMasterServiceDto,
} from './dtos/master-service.dto';
import { UserModuleService } from './services/user-module.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userModuleService: UserModuleService) {}

  @ApiBearerAuth('Bearer')
  @UseGuards(JwtAuthGuard)
  @Get('enable-master')
  async enableMaster(@GetUserFromRequest() user: IJwtTokenData) {
    return this.userModuleService.enableMaster(user);
  }

  @ApiBearerAuth('Bearer')
  @UseGuards(JwtAuthGuard)
  @Get('disable-master')
  async disableMaster(@GetUserFromRequest() user: IJwtTokenData) {
    return this.userModuleService.disableMaster(user);
  }

  @ApiBearerAuth('Bearer')
  @UseGuards(JwtAuthGuard)
  @Post('master/service')
  async createMasterService(
    @GetUserFromRequest() user: IJwtTokenData,
    @Body() data: CreateMasterServiceDto,
  ) {
    return this.userModuleService.createMasterService(user, data);
  }

  @ApiBearerAuth('Bearer')
  @UseGuards(JwtAuthGuard)
  @Get('master/service')
  async getOwnMasterServices(@GetUserFromRequest() user: IJwtTokenData) {
    return this.userModuleService.getOwnMasterServices(user);
  }

  @Get('master/:id/service')
  async getMasterServices(@Param('id', ParseUUIDPipe) id: string) {
    return this.userModuleService.getMasterServicesByMasterId(id);
  }

  @ApiBearerAuth('Bearer')
  @UseGuards(JwtAuthGuard)
  @Patch('master/service/:id')
  async updateMasterService(
    @Param('id', ParseUUIDPipe) serviceId: string,
    @GetUserFromRequest() user: IJwtTokenData,
    @Body() data: UpdateMasterServiceDto,
  ) {
    return this.userModuleService.updateMasterService(serviceId, user, data);
  }

  @ApiBearerAuth('Bearer')
  @UseGuards(JwtAuthGuard)
  @Delete('master/service/:id')
  async deleteMasterService(
    @Param('id', ParseUUIDPipe) serviceId: string,
    @GetUserFromRequest() user: IJwtTokenData,
  ) {
    return this.userModuleService.deleteMasterService(serviceId, user);
  }

  @Get(':username')
  async getUser(@Param('username') username: string) {
    return this.userModuleService.getUser(username);
  }

  @ApiBearerAuth('Bearer')
  @UseGuards(JwtAuthGuard)
  @Get('')
  async getProtectedUser(@Req() req: ProtectedRequest) {
    return this.userModuleService.getProtectedUser(req.user);
  }
}
