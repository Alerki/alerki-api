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
  Query,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import * as imageType from 'image-type';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { IJwtTokenData } from '../auth/interfaces';
import { ProtectedRequest } from '../auth/interfaces/protected-request.interface';
import { apiConfig } from '../config/api.config';
import {
  CreateMasterScheduleDto,
  CreateMasterServiceDto,
  GetMasterCalendarQueryDto,
  GetMasterScheduleQueryDto,
  GetSlotsQueryDto,
  MasterScheduleDto,
  MasterWeeklyScheduleDto,
  UpdateMasterScheduleDto,
  UpdateMasterServiceDto,
  UpdateMasterWeeklyScheduleDto,
} from '../master/dto/master.dto';
import { MasterScheduleService } from '../master/services/master-schedule.service';
import { MasterWeeklyScheduleService } from '../master/services/master-weekly-schedule.service';
import { GetUserFromRequest } from '../shared/decorators/get-user-from-request.decorator';
import { PatchUserPictureDto, UpdateUserDto } from './dtos/user.dto';
import { UserModuleService } from './services/user-module.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly userModuleService: UserModuleService,
    private readonly masterWeeklyScheduleService: MasterWeeklyScheduleService,
    private readonly masterScheduleService: MasterScheduleService,
  ) {}

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

  @ApiBearerAuth('Bearer')
  @ApiOkResponse({
    type: MasterWeeklyScheduleDto,
  })
  @UseGuards(JwtAuthGuard)
  @Patch('master/weekly-schedule')
  async updateMasterWeeklySchedule(
    @Body() data: UpdateMasterWeeklyScheduleDto,
    @GetUserFromRequest() user: IJwtTokenData,
  ) {
    return this.masterWeeklyScheduleService.updateWeeklySchedule(user, data);
  }

  @ApiOperation({
    summary: 'Create master schedule',
    description: 'Create master schedule',
  })
  @ApiOkResponse({
    type: MasterScheduleDto,
  })
  @ApiBearerAuth('Bearer')
  @UseGuards(JwtAuthGuard)
  @Post('master/schedule')
  async createMasterSchedule(
    @GetUserFromRequest() user: IJwtTokenData,
    @Body() data: CreateMasterScheduleDto,
  ) {
    return this.masterScheduleService.create(user, data);
  }

  @ApiOperation({
    summary: 'Update master schedule',
    description: 'Update master schedule',
  })
  @ApiOkResponse({
    type: MasterScheduleDto,
  })
  @ApiParam({
    description: 'Master schedule ID',
    name: 'id',
    type: String,
    example: '2a3ca6b2-c726-4880-96e4-0ddb4542b76b',
  })
  @ApiBearerAuth('Bearer')
  @UseGuards(JwtAuthGuard)
  @Patch('master/schedule/:id')
  async updateMasterSchedule(
    @GetUserFromRequest() user: IJwtTokenData,
    @Body() data: UpdateMasterScheduleDto,
    @Param('id') id: string,
  ) {
    return this.masterScheduleService.updateSchedule(user, id, data);
  }

  @ApiOperation({
    summary: 'Get master schedule',
    description: 'Get master schedule',
  })
  @ApiOkResponse({
    type: MasterScheduleDto,
  })
  @ApiParam({
    description: 'Master profile ID',
    name: 'masterId',
    type: String,
    example: '2a3ca6b2-c726-4880-96e4-0ddb4542b76b',
  })
  @Get('master/:masterId/schedule')
  async getMasterSchedule(
    @Query() query: GetMasterScheduleQueryDto,
    @Param('masterId') masterId: string,
  ) {
    return this.masterScheduleService.getMasterSchedule(masterId, query);
  }

  @ApiOperation({
    summary: 'Get master schedule',
    description: 'Get master schedule',
  })
  @ApiOkResponse({
    type: MasterScheduleDto,
  })
  @ApiParam({
    description: 'Master schedule ID',
    name: 'scheduleId',
    type: String,
    example: '2a3ca6b2-c726-4880-96e4-0ddb4542b711',
  })
  @Get('master/schedule/:scheduleId')
  async getMasterScheduleById(@Param('scheduleId') scheduleId: string) {
    return this.masterScheduleService.getMasterScheduleById(scheduleId);
  }

  @ApiOperation({
    summary: 'Get master calendar',
    description: 'Get master calendar',
  })
  // @ApiOkResponse({
  //   type: MasterScheduleDto,
  // })
  @ApiParam({
    description: 'Master profile ID',
    name: 'masterId',
    type: String,
    example: '2a3ca6b2-c726-4880-96e4-0ddb4542b76b',
  })
  @Get('master/:masterId/calendar')
  async getMasterCalendar(
    @Param('masterId', ParseUUIDPipe) masterId: string,
    @Query() query: GetMasterCalendarQueryDto,
  ) {
    return this.masterScheduleService.getMasterCalendar(masterId, query);
  }

  @ApiOperation({
    summary: 'Get slots for specific day',
    description: 'Get slots for specific day',
  })
  @ApiParam({
    description: 'Master service ID',
    name: 'serviceId',
    type: String,
    example: '2a3ca6b2-c726-4880-96e4-0ddb4542b76b',
  })
  @Get('master/service/:serviceId/slots')
  async getTime(
    @Param('serviceId', ParseUUIDPipe) serviceId: string,
    @Query() query: GetSlotsQueryDto,
  ) {
    return this.masterScheduleService.getSlots(serviceId, query);
  }

  @ApiOperation({
    summary: 'Get master weekly schedule',
    description: 'Get master weekly schedule',
  })
  @ApiParam({
    description: 'Master profile ID',
    name: 'id',
    type: String,
    example: '69290f7c-b095-4278-bf0b-b01df03bace6',
  })
  @ApiOkResponse({
    type: MasterWeeklyScheduleDto,
  })
  @ApiBearerAuth('Bearer')
  @UseGuards(JwtAuthGuard)
  @Get('master/:id/weekly-schedule')
  async getMasterWeeklySchedule(@Param('id') id: string) {
    return this.masterWeeklyScheduleService.getMasterWeeklySchedule(id);
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
