import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import Prisma from '@prisma/client';
import * as imageSize from 'buffer-image-size';
import * as imageType from 'image-type';
import * as sharp from 'sharp';

import * as ApiConfig from '@Config/api/property.config';
import { MasterScheduleService } from '@Module/profile/master-schedule.service';
import { CreateMasterScheduleDto, GetMasterScheduleQueries } from '@Module/user/dto/master.dto';
import { PatchUserDto, UserDto } from '@Module/user/dto/user.dto';
import { UserPictureService } from '@Module/user/user-picture.service';
import { prisma } from '@Shared/services/prisma.service';

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

    if (!pictureType.ext.match(ApiConfig.User.availablePictureExtensions)) {
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
  async getMasterScheduleByDate(
    { id }: Pick<Prisma.MasterSchedule, 'id'>,
    {
      from,
      to,
      year,
      month,
    }: GetMasterScheduleQueries,
  ) {
    // Handle from / to queries
    if (from) {
      if (!to) {
        throw new BadRequestException(
          'Required both parameters "from" and "to"',
        );
      }

      const schedules = await this.masterScheduleService.findMany({
        where: {
          masterId: id,
          date: {
            gt: new Date(from).toISOString(),
            lte: new Date(to).toISOString(),
          },
        },
      });

      return schedules;
    }

    // Handle year / month
    const fromDate = new Date();
    const toDate = new Date();

    if (year) {
      fromDate.setUTCFullYear(year);
      toDate.setUTCFullYear(year);
    }

    if (month) {
      fromDate.setUTCMonth(month);
      toDate.setUTCMonth(month + 1);
      toDate.setUTCMilliseconds(-1);
    } else {
      const currentMonth = (new Date()).getUTCMonth();

      fromDate.setUTCMonth(currentMonth);
      toDate.setUTCMonth(currentMonth + 1);
      toDate.setUTCMilliseconds(-1);
    }

    const schedules = await this.masterScheduleService.findMany({
      where: {
        masterId: id,
        date: {
          gt: new Date(fromDate).toISOString(),
          lte: new Date(toDate).toISOString(),
        },
      },
    });

    return schedules;
  }

  async createMasterSchedule(
    { id }: Pick<Prisma.UserPicture, 'id'>,
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
        date: data.date,
      },
    });

    if (checkDate) {
      throw new BadRequestException(
        'Master schedule with the date already exists',
      );
    }

    const newSchedule = await this.prismaService.masterSchedule.create({
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
}
