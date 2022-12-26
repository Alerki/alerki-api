import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import Prisma from '@prisma/client';
import * as imageSize from 'buffer-image-size';
import * as imageType from 'image-type';
import * as sharp from 'sharp';

import * as ApiConfig from '@Config/api/property.config';
import { checkScheduleBelongsToMaster } from '@Module/user/utils';
import { prisma } from '@Shared/services/prisma.service';
import { MasterProfileService } from '@Src/modules/profile/master-profile.service';
import { MasterScheduleService } from '@Src/modules/profile/master-schedule.service';
import {
  CreateMasterScheduleDto,
  GetMasterMonthlyScheduleQueries,
  GetMasterScheduleQueries,
  PatchMasterScheduleDto,
} from '@Src/modules/user/dto/master.dto';
import {
  PatchUserDto,
  UserDto,
} from '@Src/modules/user/dto/user.dto';
import { UserPictureService } from '@Src/modules/user/user-picture.service';
import { MasterWeeklyScheduleService } from '@Module/profile/weekly-schedule.service';
import { AppointmentService } from '@Module/appointment/appointment.service';

/**
 * User service
 */
@Injectable()
export class UserService {
  readonly prismaService = prisma;

  /**
   * User service constructor
   *
   * @param masterScheduleService master schedule service
   * @param userPictureService user picture service
   */
  constructor(
    private readonly masterScheduleService: MasterScheduleService,
    private readonly userPictureService: UserPictureService,
    @Inject(forwardRef(() => MasterProfileService))
    private readonly masterProfileService: MasterProfileService,
    @Inject(forwardRef(() => MasterWeeklyScheduleService))
    private readonly masterWeeklyScheduleService: MasterWeeklyScheduleService,
    private readonly appointmentService: AppointmentService,
  ) { }

  /**
   * Find first user
   *
   * @param args find by arguments
   * @returns user
   */
  async findFirst(args: Prisma.Prisma.UserFindFirstArgs) {
    return this.prismaService.user.findFirst(args);
  }

  /**
   * Find many users
   *
   * @param args find many by arguments
   * @returns user
   */
  async findMany(args: Prisma.Prisma.UserFindManyArgs) {
    return this.prismaService.user.findMany(args);
  }

  /**
   * Create user
   *
   * @param args create arguments
   * @returns
   */
  async create(args: Prisma.Prisma.UserCreateArgs) {
    return this.prismaService.user.create(args);
  }

  /**
   * Get user profile
   *
   * @param param0 get user profile params
   * @returns user profile
   */
  async getUser({ id, username }: Partial<
    Pick<Prisma.User, 'id' | 'username'>
  >) {
    const profile = await this.findFirst({
      where: {
        OR: [
          {
            username: {
              equals: username,
              mode: 'insensitive',
            },
          },
          {
            id,
          },
        ],
      },
      include: {
        clientProfile: true,
        masterProfile: {
          include: {
            weeklySchedule: true,
          },
        },
      },
    });

    if (!profile) {
      throw new NotFoundException('User profile not found');
    }

    return new UserDto(profile);
  }

  /**
   * Get exists user
   *
   * @param data get arguments
   * @param callback for custom error
   * @returns
   */
  async getExists<T extends Prisma.Prisma.UserFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.UserFindFirstArgs>,
    callback?: () => never,
  ) {
    // Check if user exists
    const candidate = await this.prismaService.user.findFirst(data);

    if (!candidate) {
      if (!callback) {
        throw new NotFoundException('User not exists');
      }

      callback();
    }

    return candidate;
  }

  /**
   * Get picture
   *
   * @param param0 picture ID
   * @returns
   */
  async getPicture({ id }: Pick<Prisma.UserPicture, 'id'>) {
    const picture = await this.userPictureService.find({
      where: {
        id,
      },
    });

    if (!picture) {
      throw new NotFoundException('Picture not found');
    }

    return picture;
  }

  /**
   * Patch user
   *
   * @param args path user arguments
   * @returns
   */
  async patchUser(
    user: Pick<Prisma.User, 'id'>,
    data: PatchUserDto,
  ) {
    const { id } = user;

    await this.getExists({
      where: {
        id,
      },
    });

    return await this.prismaService.user.update({
      where: {
        id,
      },
      data,
    });
  }

  /**
   * Path user picture
   *
   * @param param0 path picture arguments
   */
  async patchUserPicture(
    {
      id,
      picture,
    }: Pick<Prisma.User, 'id'> & { picture: Express.Multer.File },
  ) {
    const candidate = await this.getExists({
      where: {
        id,
      },
    });

    let pictureBuffer: Buffer = picture.buffer;

    // Check picture type
    const pictureType = imageType(pictureBuffer);

    if (!pictureType) {
      throw new BadRequestException(
        'Validation failed (expected type is /^(jpg|jpeg|png|heif)$/)',
      );
    }

    // eslint-disable-next-line max-len
    if (!pictureType.ext.match(ApiConfig.UserConfig.availablePictureExtensions)) {
      throw new BadRequestException(
        'Validation failed (expected type is /^(jpg|jpeg|png|heif)$/)',
      );
    }

    // Check picture size
    const { width, height } = imageSize(pictureBuffer);

    if (width > 100 || height > 100) {
      pictureBuffer = await sharp(picture.buffer)
        .resize(50, 50)
        .jpeg({ mozjpeg: true })
        .toBuffer();
    }

    // Create or update picture
    if (candidate.pictureId) {
      await this.userPictureService.update({
        id: candidate.pictureId,
        picture: pictureBuffer,
      });
    } else {
      await this.userPictureService.create({
        data: {
          picture: pictureBuffer,
          user: {
            connect: {
              id,
            },
          },
        },
      });
    }
  }

  /**
   * Delete picture
   *
   * @param param0 delete picture arguments
   */
  async deletePicture(
    { id }: Pick<Prisma.UserPicture, 'id'>,
  ) {
    const candidate = await this.getExists({
      where: {
        id,
      },
    });

    if (!candidate.pictureId) {
      throw new NotFoundException('Picture not exists');
    }

    await this.userPictureService.delete({ id: candidate.pictureId });
  }

  /**
   * Get master schedule by date
   *
   * @param param0 master ID
   * @param param1 queries
   * @returns
   */
  async getMasterSchedule(
    { id: masterId }: Pick<Prisma.MasterSchedule, 'id'>,
    {
      from,
      to,
      year,
      month,
      date,
    }: GetMasterScheduleQueries,
  ) {
    if (from || to) {
      if (!from || !to) {
        throw new BadRequestException('Required both from and id queries');
      }

      return await this.masterScheduleService.findFromTo(
        { id: masterId },
        { from, to },
      );
    }

    return await this.masterScheduleService.findByDate(
      { id: masterId },
      { year, month, date },
    );
  }

  /**
   * Get master schedule by ID
   *
   * @param param0 schedule ID
   * @returns master schedule
   */
  async getMasterScheduleById(
    { id }: Pick<Prisma.MasterSchedule, 'id'>,
  ) {
    return await this.masterScheduleService.getExists({
      where: {
        id,
      },
    });
  }

  /**
   * Create master schedule
   *
   * @param param0 user ID
   * @param data schedule data
   * @returns new master schedule
   */
  async createMasterSchedule(
    { id }: Pick<Prisma.User, 'id'>,
    data: CreateMasterScheduleDto,
  ) {
    const userCandidate = await this.getExists({
      where: {
        id,
      },
      include: {
        masterProfile: true,
      },
    });

    // Check if schedule for the date already exists
    const checkDate = await this.masterScheduleService.findFirst({
      where: {
        master: {
          id: userCandidate.masterProfileId,
        },
        startTime: data.startTime,
      },
    });

    if (checkDate) {
      throw new BadRequestException(
        'Master schedule with the date already exists',
      );
    }

    const newSchedule = await this.masterScheduleService.create({
      data: {
        ...data,
        master: {
          connect: {
            id: userCandidate.masterProfileId,
          },
        },
      },
    });

    return newSchedule;
  }

  /**
   * Delete master schedule
   *
   * @param param0 user id
   * @param param1 schedule id
   * @returns promise
   */
  async deleteMasterSchedule(
    { id: userId }: Pick<Prisma.User, 'id'>,
    { id: scheduleId }: Pick<Prisma.MasterSchedule, 'id'>,
  ) {
    const scheduleCandidate = await this.masterScheduleService.findFirst({
      where: {
        id: scheduleId,
      },
    });

    const userCandidate = await this.getExists({
      where: {
        id: userId,
      },
      select: {
        masterProfileId: true,
      },
    });

    checkScheduleBelongsToMaster(
      scheduleCandidate,
      userCandidate,
    );

    return await this.masterScheduleService.delete({
      where: {
        id: scheduleCandidate.id,
      },
    });
  }

  /**
   * Patch master schedule
   *
   * @param param0 user ID
   * @param param1 schedule ID to update
   * @param data data to update
   * @returns updated schedule
   */
  async patchMasterSchedule(
    { id: userId }: Pick<Prisma.User, 'id'>,
    { id: scheduleId }: Pick<Prisma.MasterSchedule, 'id'>,
    data: PatchMasterScheduleDto,
  ) {
    const scheduleCandidate =
      await this.masterScheduleService.getExists({
        where: {
          id: scheduleId,
        },
      });

    const userCandidate = await this.getExists({
      where: {
        id: userId,
      },
      select: {
        masterProfileId: true,
      },
    });

    checkScheduleBelongsToMaster(
      scheduleCandidate,
      userCandidate,
    );

    return await this.masterScheduleService.update(
      { id: scheduleId },
      data,
    );
  }

  /**
   * Get master profile by ID
   *
   * @param param0 master profile ID
   * @returns master profile
   */
  async getMasterProfile(
    { id }: Pick<Prisma.MasterProfile, 'id'>,
  ) {
    return await this.masterProfileService.getExists({
      where: {
        id,
      },
    });
  }

  /**
   * Get master monthly schedule
   *
   * @param param0 master profile ID
   * @param param1 get master schedule options
   * @returns monthly schedule
   */
  async getMasterMonthlySchedule(
    { id: masterProfileId }: Pick<Prisma.MasterProfile, 'id'>,
    {
      year,
      month,
    }: GetMasterMonthlyScheduleQueries,
  ) {
    const masterCandidate = await this.masterProfileService.getExists({
      where: {
        id: masterProfileId,
      },
    });

    const weeklySchedule =
      await this.masterWeeklyScheduleService.getWeeklySchedule(
        {
          id: masterCandidate.id,
        },
      );

    // Create date to get month appointment and master schedules
    const searchStartDate = new Date();

    if (year) {
      searchStartDate.setUTCFullYear(year);
    }

    if (month) {
      searchStartDate.setUTCMonth(month - 1);
    }

    searchStartDate.setUTCDate(1);
    searchStartDate.setUTCHours(0);
    searchStartDate.setUTCMinutes(0);
    searchStartDate.setUTCSeconds(0);
    searchStartDate.setUTCMilliseconds(0);

    const searchEndDate = new Date(searchStartDate);

    searchEndDate.setUTCMonth(month || searchEndDate.getUTCMonth() + 1);
    searchEndDate.setUTCDate(1);
    searchEndDate.setUTCHours(0);
    searchEndDate.setUTCMinutes(0);
    searchEndDate.setUTCSeconds(0);
    searchEndDate.setUTCMilliseconds(0);

    // Get appointment for the month
    const appointments = await this.appointmentService.findMany({
      where: {
        masterId: masterProfileId,
        startTime: {
          gte: searchStartDate.toISOString(),
          lt: searchEndDate.toISOString(),
        },
      },
    });

    // Get master schedules for the month
    const schedules = await this.masterScheduleService.findMany({
      where: {
        masterId: masterProfileId,
        startTime: {
          gte: searchStartDate.toISOString(),
          lt: searchEndDate.toISOString(),
        },
      },
    });

    // Create object to collect schedules days
    const monthlySchedule: Array<any> = [];

    // Variable to store days counter 1..28/29/30/31
    let dateCounter = 1;

    // Set current month
    const scheduleMonth = month !== undefined
      ? month - 1
      : new Date().getUTCMonth();
    const scheduleYear = year || new Date().getUTCFullYear();

    // Generate monthly schedule
    while (true) {
      // Create schedule item specific date
      const date = new Date();
      date.setUTCFullYear(scheduleYear);
      date.setUTCMonth(scheduleMonth);
      date.setUTCDate(dateCounter);
      date.setUTCHours(0);
      date.setUTCMinutes(0);
      date.setUTCSeconds(0);
      date.setUTCMilliseconds(0);

      // Increment date count for next iteration
      dateCounter++;

      // Check for next month
      if (scheduleMonth !== date.getUTCMonth()) {
        break;
      }

      // Appointments for specific day in schedule
      const dayAppointments = [];

      for (let i = 0; i < appointments.length; i++) {
        const appointmentDate = new Date(appointments[i].startTime);

        if (appointmentDate.getUTCDate() === date.getUTCDate()) {
          dayAppointments.push(appointments[i]);
          // appointments.splice(i, 1);
        }
      }

      // Day specific schedule
      let daySpecificSchedule;

      for (let i = 0; i < schedules.length; i++) {
        const scheduleDate = new Date(schedules[i].startTime);

        if (
          scheduleDate.getUTCDate() === date.getUTCDate() &&
          schedules[i].available
        ) {
          if (schedules[i].available) {
            daySpecificSchedule = schedules[i];
          }

          schedules.splice(i, 1);
          break;
        }
      }

      // Create day specific schedule
      const scheduledDay: Record<string, any> = {
        date,
        startTime: new Date(weeklySchedule.startTime),
        endTime: new Date(weeklySchedule.endTime),
        appointments: dayAppointments,
      };

      // Set other schedule properties
      // Use day specific schedule or weekly schedule
      if (daySpecificSchedule) {
        scheduledDay.startTime = daySpecificSchedule.startTime;
        scheduledDay.endTime = daySpecificSchedule.endTime;
        scheduledDay.timezoneOffset = daySpecificSchedule.timezoneOffset;
        scheduledDay.dayOff = daySpecificSchedule.dayOff;
      } else {
        scheduledDay.startTime = weeklySchedule.startTime;
        scheduledDay.endTime = weeklySchedule.endTime;
        scheduledDay.timezoneOffset = weeklySchedule.timezoneOffset;

        scheduledDay.dayOff = weeklySchedule[
          ApiConfig.daysOfWeek[date.getUTCDay()] as ApiConfig.DaysOfWeek
        ];
      }

      monthlySchedule.push(scheduledDay);
    }

    return monthlySchedule;
  }
}
