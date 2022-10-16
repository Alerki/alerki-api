/* eslint-disable max-len */
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  FileTypeValidator,
  Get, HttpStatus, MaxFileSizeValidator, Param, ParseFilePipe, ParseUUIDPipe, Patch, Post, Req, Res, UploadedFile, UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import * as imageType from 'image-type';

import { ProtectedRequest } from '@Module/auth/interface/protected-request.interface';
import { JwtAuthGuard } from '@Module/auth/jwt-auth.guard';
import { MasterServiceService } from '@Module/profile/master-service.service';
import { ProfileService } from '@Module/profile/profile.service';
import { PatchUserDto } from '@Module/user/dto/user.dto';
import { UserService } from '@Module/user/user.service';
import { UserPictureService } from '@Module/user/user-picture.service';
import * as ApiConfig from '@Config/api/property.config';
import { CreateMasterServiceDto } from '@Module/user/dto/master.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly masterServiceService: MasterServiceService,
    private readonly profileService: ProfileService,
  ) { }

  /**
   * Enable master
   *
   * @param req request
   */
  @ApiOperation({ description: 'Enable master profile' })
  @ApiBearerAuth('Bearer')
  @ApiOkResponse({ description: 'Successful enable master profile' })
  @ApiBadRequestResponse({ description: 'User is already master' })
  @ApiUnauthorizedResponse({ description: 'Bad access token' })
  @UseGuards(JwtAuthGuard)
  @Patch('enable-master')
  async enableMaster(
    @Req() req: ProtectedRequest,
  ) {
    // Get user ID
    const { user: { id } } = req;

    await this.profileService.enableMaster({ id });
  }

  /**
  * Disable master
  *
  * @param req request
  */
  @ApiOperation({ description: 'Disable master profile' })
  @ApiBearerAuth('Bearer')
  @ApiOkResponse({ description: 'Successful disable master profile' })
  @ApiBadRequestResponse({ description: 'User is not a master' })
  @ApiUnauthorizedResponse({ description: 'Bad access token' })
  @UseGuards(JwtAuthGuard)
  @Patch('disable-master')
  async disableMaster(
    @Req() req: ProtectedRequest,
  ) {
    // Get user ID
    const { user: { id } } = req;

    await this.profileService.disableMaster({ id });
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('/master/service')
  // async getMasterServiceProtected(
  //   @Req() req: ProtectedRequest,
  // ) {
  //   const { user: { id } } = req;

  //   const masterServices = await this.masterServiceService.getMasterServiceProtected({ id });

  //   return masterServices;
  // }

  // @Get('/master/:id/service')
  // async getMasterService(
  //   @Param('id') id: string,
  // ) {
  //   const masterServices = await this.masterServiceService.getMasterService({ id });

  //   return masterServices;
  // }

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

  @ApiOperation({ description: 'Patch user picture' })
  @ApiOkResponse({ description: 'Picture updates successfully' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiBadRequestResponse({ description: 'Validation failed (expected type is /^(jpg|jpeg|png|heif)$/)' })
  @UseInterceptors(FileInterceptor('picture'))
  @UseGuards(JwtAuthGuard)
  @Patch('picture')
  async patchPicture(
    @Req() req: ProtectedRequest,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 100000 }),
          new FileTypeValidator({ fileType: ApiConfig.User.availablePictureExtensions }),
        ],
      }),
    ) picture: Express.Multer.File,
  ) {
    const { user: { id } } = req;

    await this.userService.patchUserPicture({ id, picture });
  }

  /**
   * Get user picture
   *
   * @param id picture id
   * @param res response
   */
  @ApiOperation({ description: 'Get user picture' })
  @ApiOkResponse({ description: 'Picture found and got successfully' })
  @ApiNotFoundResponse({ description: 'Picture not found' })
  @ApiParam({ name: 'id', description: 'Picture ID' })
  @Get('picture/:id')
  async getPicture(
    @Param('id', ParseUUIDPipe) id: string,
    @Res() res: Response,
  ) {
    const { picture } = await this.userService.getPicture({ id });

    const { mime } = imageType(picture);

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
  @Get('')
  async getProtectedUser(
    @Req() req: ProtectedRequest,
  ) {
    const { id } = req.user;

    const profile = await this.userService.getUser({ id });

    return profile;
  }

  /**
   * Patch user
   *
   * @param req request
   * @param body body
   * @returns patched user
   */
  @ApiOperation({ description: 'Patcher user' })
  @ApiBearerAuth('Bearer')
  @ApiOkResponse({ description: 'User patched successfully' })
  @ApiNotFoundResponse({ description: 'User unauthorized / User not found' })
  @UseGuards(JwtAuthGuard)
  @Patch('')
  async patchUser(
    @Req() req: ProtectedRequest,
    @Body() body: PatchUserDto,
  ) {
    // Get user ID
    const { user: { id } } = req;

    // Get user update params
    const {
      username,
      firstName,
      lastName,
      phoneNumber,
    } = body;

    const updatedUser = await this.userService.patchUser({
      id,
      data: {
        username,
        firstName,
        lastName,
        phoneNumber,
      },
    });

    return updatedUser;
  }

  /**
   * Get user profile
   *
   * @param usernameOrId profile username of ID
   * @returns user profile
   */
  @ApiOperation({ description: 'Get user profile' })
  @ApiOkResponse({ description: 'Profile received successfully' })
  @ApiNotFoundResponse({ description: 'User profile not found' })
  @ApiParam({ name: 'usernameOrId', description: 'User username or id', example: ['james', 'uid...'] })
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':usernameOrId')
  async getUser(
    @Param('usernameOrId') usernameOrId: string,
  ) {
    const profile = await this.userService.getUser({ id: usernameOrId, username: usernameOrId });

    return profile;
  }
}
