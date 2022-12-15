/* eslint-disable max-len */
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  HttpCode,
  HttpStatus,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
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
import { Response } from 'express';
import * as imageType from 'image-type';

import * as ApiConfig from '@Config/api/property.config';
import { ProtectedRequest } from '@Src/modules/auth/interface/protected-request.interface';
import { JwtAuthGuard } from '@Src/modules/auth/jwt-auth.guard';
import { MasterServiceService } from '@Src/modules/profile/master-service.service';
import { ProfileService } from '@Src/modules/profile/profile.service';
import { MasterWeeklyScheduleService } from '@Src/modules/profile/weekly-schedule.service';
import {
  CreateMasterScheduleDto,
  CreateMasterServiceDto,
  GetMasterScheduleQueries,
  PatchMasterServiceDto,
  PatchMasterWeeklyScheduleDto,
} from '@Src/modules/user/dto/master.dto';
import { PatchUserDto } from '@Src/modules/user/dto/user.dto';
import { UserService } from '@Src/modules/user/user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly masterServiceService: MasterServiceService,
    private readonly profileService: ProfileService,
    private readonly masterWeeklyScheduleService: MasterWeeklyScheduleService,
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
  @ApiUnauthorizedResponse({ description: 'User unauthorized' })
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
  @ApiUnauthorizedResponse({ description: 'User unauthorized' })
  @UseGuards(JwtAuthGuard)
  @Patch('disable-master')
  async disableMaster(
    @Req() req: ProtectedRequest,
  ) {
    // Get user ID
    const { user: { id } } = req;

    await this.profileService.disableMaster({ id });
  }

  /**
   * Get master profile
   *
   * @param id master profile ID
   * @returns master profile
   */
  @ApiOperation({ description: 'Get master profile' })
  @ApiOkResponse({ description: 'Got master profile successfully' })
  @ApiNotFoundResponse({ description: 'Master profile not exists' })
  @Get('master/:id')
  async getMasterProfile(
    @Param('id') id: string,
  ) {
    return await this.userService.getMasterProfile({ id });
  }

  /**
   * Get master services
   *
   * @param id master profile ID
   * @returns master services
   */
  @ApiOperation({ description: 'Get master services' })
  @ApiOkResponse({ description: 'Successfully get master services' })
  @ApiNotFoundResponse({ description: 'Master profile not exists' })
  @ApiParam({ name: 'id', description: 'Master ID' })
  @Get('master/:id/service')
  async getMasterService(
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    const masterServices = await this.masterServiceService.getMasterService(
      { id },
    );

    return masterServices;
  }

  /**
   * 'Create master service
   *
   * @param req request
   * @param body body
   * @returns new master service
   */
  @ApiOperation({ description: 'Create master schedule' })
  @ApiOkResponse({ description: 'Schedule created successfully' })
  @ApiBadRequestResponse({ description: 'User is not a master' })
  @ApiBadRequestResponse({ description: 'Master service with specified name already exists' })
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(JwtAuthGuard)
  @Post('master/service')
  async createMasterService(
    @Req() req: ProtectedRequest,
    @Body() body: CreateMasterServiceDto,
  ) {
    const { user: { id } } = req;

    const newService = await this.masterServiceService.createMasterService(
      { id, ...body },
    );

    return newService;
  }

  /**
   * Patch master service
   *
   * @param req request
   * @param body body
   * @param serviceId schedule ID
   * @returns patched master service
   */
  @ApiOperation({ description: 'Patch master service' })
  @ApiBearerAuth('Bearer')
  @ApiOkResponse({ description: 'Successful update master service' })
  @ApiNotFoundResponse({ description: 'Master service not exists' })
  @ApiBadRequestResponse({ description: 'The service does not belong to the user' })
  @ApiUnauthorizedResponse({ description: 'User unauthorized' })
  @ApiParam({ name: 'serviceId', description: 'Master service ID', example: ApiConfig.GeneralConfig.UUIDExample })
  @UseGuards(JwtAuthGuard)
  @Patch('master/service/:serviceId')
  async patchMasterService(
    @Req() req: ProtectedRequest,
    @Body() body: PatchMasterServiceDto,
    @Param('serviceId') serviceId: string,
  ) {
    const { user: { id: userId } } = req;

    const patchedMasterService = await this.masterServiceService.patchMasterService(
      { id: userId },
      { id: serviceId },
      body,
    );

    return patchedMasterService;
  }

  /**
   * Get master weekly schedule
   *
   * @param id master ID
   * @returns master weekly schedule
   */
  @ApiOperation({ description: 'Get master weekly schedule' })
  @ApiOkResponse({ description: 'Master weekly schedule got successfully' })
  @ApiNotFoundResponse({ description: 'Master not found' })
  @ApiParam({ name: 'id', description: 'Master ID' })
  @Get('master/:id/weekly-schedule')
  async getMasterWeeklySchedule(
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    const weeklySchedule = await this.masterWeeklyScheduleService.getWeeklySchedule({ id });

    return weeklySchedule;
  }

  /**
   * Patch master's weekly schedule
   *
   * @param req request
   * @param body body
   * @returns weekly schedule
   */
  @ApiOperation({ description: 'Patch master\'s weekly schedule' })
  @ApiBearerAuth('Bearer')
  @ApiOkResponse({ description: 'Weekly schedule patched successfully' })
  @ApiNotFoundResponse({ description: 'User not exists' })
  @UseGuards(JwtAuthGuard)
  @Patch('master/weekly-schedule')
  async patchMasterWeeklySchedule(
    @Req() req: ProtectedRequest,
    @Body() body: PatchMasterWeeklyScheduleDto,
  ) {
    const { user: { id } } = req;

    const patchedSchedule = await this.masterWeeklyScheduleService.patchWeeklySchedule(
      { id },
      body,
    );

    return patchedSchedule;
  }

  /**
   * Get master schedule
   *
   * @param id master profile ID
   * @param queries queries to get master schedule
   * @returns master schedule
   */
  @ApiOperation({ description: 'Get master schedule' })
  @ApiOkResponse({ description: 'Master schedule found successfully' })
  @ApiNotFoundResponse({ description: 'Master schedule not found' })
  @ApiBadRequestResponse({ description: 'Required both from and id queries' })
  @Get('master/:id/schedule')
  async getMasterSchedule(
    @Param('id') id: string,
    @Query() queries: GetMasterScheduleQueries,
  ) {
    return await this.userService.getMasterSchedule(
      {
        id,
      },
      queries,
    );
  }

  /**
   * Get master schedule by ID
   *
   * @param id schedule ID
   * @returns master schedule
   */
  @ApiOperation({ description: 'Get master schedule by ID' })
  @ApiOkResponse({ description: 'Master schedule found successfully' })
  @ApiNotFoundResponse({ description: 'Master schedule not found' })
  @Get('master/schedule/:id')
  async getMasterScheduleById(
    @Param('id') id: string,
  ) {
    return await this.userService.getMasterScheduleById(
      { id },
    );
  }

  /**
   * Create master schedule for specific day
   *
   * @param req request
   * @param body body
   * @returns
   */
  @ApiOperation({ description: 'Create schedule for specific day' })
  @ApiBearerAuth('Bearer')
  @ApiOkResponse({ description: 'Schedule created successfully' })
  @ApiBadRequestResponse({ description: 'Master schedule with the date already exists' })
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(JwtAuthGuard)
  @Post('master/schedule')
  async createMasterSchedule(
    @Req() req: ProtectedRequest,
    @Body() body: CreateMasterScheduleDto,
  ) {
    return await this.userService.createMasterSchedule(
      {
        id: req.user.id,
      },
      body,
    );
  }

  /**
   * Delete master schedule
   *
   * @param req request
   * @param serviceId service ID to delete
   */
  @ApiOperation({ description: 'Delete master schedule' })
  @ApiBearerAuth('Bearer')
  @ApiOkResponse({ description: 'Schedule deleted successfully' })
  @ApiBadRequestResponse({ description: 'The schedule not belongs to you' })
  @UseGuards(JwtAuthGuard)
  @Delete('master/schedule/:id')
  async deleteMasterSchedule(
    @Req() req: ProtectedRequest,
    @Param('id', ParseUUIDPipe) serviceId: string,
  ) {
    await this.userService.deleteMasterSchedule(
      {
        id: req.user.id,
      },
      {
        id: serviceId,
      },
    );
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
   * Patch user picture
   *
   * @param req request
   * @param picture picture file
   */
  @ApiOperation({ description: 'Patch user picture' })
  @ApiBearerAuth('Bearer')
  @ApiOkResponse({ description: 'Picture updates successfully' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiBadRequestResponse({ description: 'Validation failed (expected type is /^(jpg|jpeg|png|heif)$/)' })
  @ApiUnauthorizedResponse({ description: 'User unauthorized' })
  @UseInterceptors(FileInterceptor('picture'))
  @UseGuards(JwtAuthGuard)
  @Patch('picture')
  async patchPicture(
    @Req() req: ProtectedRequest,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 100000 }),
          new FileTypeValidator({ fileType: ApiConfig.UserConfig.availablePictureExtensions }),
        ],
      }),
    ) picture: Express.Multer.File,
  ) {
    const { user: { id } } = req;

    await this.userService.patchUserPicture({ id, picture });
  }

  /**
   * Delete picture
   *
   * @param req request
   */
  @ApiOkResponse({ description: 'Picture deleted successfully' })
  @ApiBearerAuth('Bearer')
  @ApiNotFoundResponse({ description: 'Picture not exists' })
  @ApiUnauthorizedResponse({ description: 'User unauthorized' })
  @UseGuards(JwtAuthGuard)
  @Delete('picture')
  async deletePicture(
    @Req() req: ProtectedRequest,
  ) {
    const { user: { id } } = req;

    await this.userService.deletePicture({ id });
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
  @ApiUnauthorizedResponse({ description: 'User unauthorized' })
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @Get('')
  async getProtectedUser(
    @Req() req: ProtectedRequest,
  ) {
    const { id } = req.user;

    return await this.userService.getUser({ id });
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
    return await this.userService.getUser(
      { id: usernameOrId, username: usernameOrId },
    );
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
  @ApiUnauthorizedResponse({ description: 'User unauthorized' })
  @UseGuards(JwtAuthGuard)
  @Patch('')
  async patchUser(
    @Req() req: ProtectedRequest,
    @Body() body: PatchUserDto,
  ) {
    // Get user ID
    const { user: { id } } = req;

    return await this.userService.patchUser(
      { id },
      body,
    );
  }
}
