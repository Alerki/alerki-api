import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import * as imageType from 'image-type';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { IJwtTokenData } from '../auth/interfaces';
import { ProtectedRequest } from '../auth/interfaces/protected-request.interface';
import { apiConfig } from '../config/api.config';
import { GetUserFromRequest } from '../shared/decorators/get-user-from-request.decorator';
import {
  CreateMasterServiceDto,
  UpdateMasterServiceDto,
} from './dtos/master.dto';
import { PatchUserPictureDto, UpdateUserDto } from './dtos/user.dto';
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

  @ApiBearerAuth('Bearer')
  @UseGuards(JwtAuthGuard)
  @Patch()
  async updateUser(@Req() req: ProtectedRequest, @Body() data: UpdateUserDto) {
    return this.userModuleService.updateUser(req.user, data);
  }

  @ApiParam({ name: 'id', description: 'Picture ID' })
  @Get('picture/:id')
  async getPicture(
    @Param('id', ParseUUIDPipe) id: string,
    @Res() res: Response,
  ) {
    const { picture } = await this.userModuleService.getPicture(id);

    const pictureType = await imageType(picture);

    res.type(pictureType!.mime || 'jpg');
    res.send(picture);
  }

  @ApiBearerAuth('Bearer')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('picture'))
  @UseGuards(JwtAuthGuard)
  @Patch('picture')
  async patchPicture(
    @Body() body: PatchUserPictureDto,
    @Req() req: ProtectedRequest,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 100000 }),
          new FileTypeValidator({
            fileType: apiConfig.user.userPictureFormatRegExp,
          }),
        ],
      }),
    )
    picture: Express.Multer.File,
  ) {
    await this.userModuleService.patchUserPicture({
      id: req.user.id,
      picture,
    });
  }

  @ApiBearerAuth('Bearer')
  @UseGuards(JwtAuthGuard)
  @Delete('picture')
  async deletePicture(@Req() req: ProtectedRequest) {
    await this.userModuleService.deletePicture({ id: req.user.id });
  }
}
