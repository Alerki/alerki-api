/* eslint-disable max-len */
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpStatus,
  Param, ParseUUIDPipe, Post, Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import imageType from 'image-type';

import { ProtectedRequest } from '@Module/auth/interface/protected-request.interface';
import { JwtAuthGuard } from '@Module/auth/jwt-auth.guard';
import { UserService } from '@Module/user/user.service';
import { Response } from 'express';
import { CreateMasterServiceDto } from '@Module/user/dto/master.dto';
import { MasterServiceService } from '@Module/profile/master-service.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly masterServiceService: MasterServiceService,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Get('/master/service')
  async getMasterServiceProtected(
    @Req() req: ProtectedRequest,
  ) {
    const { user: { id } } = req;

    const masterServices = await this.masterServiceService.getMasterServiceProtected({ id });

    return masterServices;
  }

  @Get('/master/:id/service')
  async getMasterService(
    @Param('id') id: string,
  ) {
    const masterServices = await this.masterServiceService.getMasterService({ id });

    return masterServices;
  }

  @UseGuards(JwtAuthGuard)
  @Post('/master/service')
  async createMasterService(
    @Req() req: ProtectedRequest,
    @Res() res: Response,
    @Body() body: CreateMasterServiceDto,
  ) {
    const { user: { id } } = req;

    const newService = await this.masterServiceService.createMasterService({ id, ...body });

    res.status(HttpStatus.CREATED).send(newService);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/picture')
  async getPictureProtected(
    @Req() req: ProtectedRequest,
    @Res() res: Response,
  ) {
    const { user: { id } } = req;

    const { picture } = await this.userService.getPictureProtected({ id });

    const { mime } = await imageType(picture);

    res.type(mime);
    res.send(picture.toString());
  }

  @Get('/picture/:id')
  async getPicture(
    @Param('id', ParseUUIDPipe) id: string,
    @Res() res: Response,
  ) {
    const { picture } = await this.userService.getPicture({ id });

    const { mime } = await imageType(picture);

    res.type(mime);
    res.send(picture.toString());
  }

  /**
   * Get own user profile
   *
   * @param req request
   * @returns
   */
  @ApiOperation({ description: 'Get own user profile' })
  @ApiBearerAuth('Bearer')
  @ApiOkResponse({ description: 'Profile received successfully' })
  @ApiNotFoundResponse({ description: 'User profile not found' })
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getProtectedUser(
    @Req() req: ProtectedRequest,
  ) {
    const { id } = req.user;

    const profile = await this.userService.getUser({ id });

    return profile;
  }

  /**
   * Get user profile
   *
   * @param username profile username
   * @returns user profile
   */
  @ApiOperation({ description: 'Get user profile' })
  @ApiOkResponse({ description: 'Profile received successfully' })
  @ApiNotFoundResponse({ description: 'User profile not found' })
  @ApiParam({ name: 'username', description: 'Profile username' })
  @ApiParam({ name: 'username', description: 'username to get user profile', example: 'james' })
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:username')
  async getUser(
    @Param('username') username: string,
  ) {
    const profile = await this.userService.getUser({ username });

    return profile;
  }
}
