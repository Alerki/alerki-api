import { BadRequestException, Injectable } from '@nestjs/common';

import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { JWTData } from '../auth/interfaces';
import { PrismaSelect } from '@paljs/plugins';
import { FindProfileArgs, UpdateProfileArgs } from './dto';
import { StatusEnum } from '../../shared/enums/status.enum';

@Injectable()
export class ProfileService {
  constructor(private readonly commonPrismaService: CommonPrismaService) {}

  async createMasterWeeklySchedule() {
    const startAt = new Date(0);
    startAt.setHours(9);
    const endAt = new Date(0);
    endAt.setHours(17);
    return this.commonPrismaService.masterWeeklySchedule.create({
      data: {
        status: StatusEnum.PUBLISHED,
        startAt,
        endAt,
      },
    });
  }

  async createMasterProfile() {
    const masterWeeklySchedule = await this.createMasterWeeklySchedule();
    return await this.commonPrismaService.masterProfile.create({
      data: {
        status: StatusEnum.PUBLISHED,
        MasterWeeklyScheduleId: masterWeeklySchedule.id,
      },
    });
  }

  async getProfile({ id }: JWTData, select?: PrismaSelect) {
    const user = await this.commonPrismaService.users.findFirst({
      where: {
        id,
      },
      ...(select || {}),
    });

    if (!user) {
      throw new BadRequestException('User is not exists');
    }

    return user;
  }

  async findProfile(select: PrismaSelect, args: FindProfileArgs) {
    const user = await this.commonPrismaService.users.findFirst({
      where: {
        username: args.username,
      },
      ...select,
    });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return user;
  }

  async updateProfile(
    { id }: JWTData,
    select: PrismaSelect,
    args: UpdateProfileArgs,
  ) {
    const user = await this.commonPrismaService.users.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new BadRequestException('User is not exist');
    }

    return this.commonPrismaService.users.update({
      where: {
        id,
      },
      data: {
        ...args,
      },
      ...select,
    });
  }

  async enableMasterProfile(select: PrismaSelect, { id }: JWTData) {
    const user = await this.commonPrismaService.users.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new BadRequestException('User is not exist');
    }

    // TODO: update user roles

    if (!user.MasterProfileId) {
      const newMasterProfile = await this.createMasterProfile();
      return await this.commonPrismaService.users.update({
        where: {
          id,
        },
        data: {
          MasterProfileId: newMasterProfile.id,
        },
        ...select,
      });
    }

    return await this.commonPrismaService.users.update({
      where: {
        id,
      },
      data: {
        MasterProfile: {
          update: {
            status: StatusEnum.PUBLISHED,
            MasterWeeklySchedule: {
              update: {
                status: StatusEnum.PUBLISHED,
              },
            },
          },
        },
      },
      ...select,
    });
  }

  async disableMasterProfile(select: PrismaSelect, { id }: JWTData) {
    const user = await this.commonPrismaService.users.findFirst({
      where: {
        id,
      },
      include: {
        MasterProfile: true,
      },
    });

    if (!user) {
      throw new BadRequestException('User is not exist');
    }

    if (
      user.MasterProfileId &&
      user.MasterProfile?.status === (StatusEnum.PUBLISHED as string)
    ) {
      return this.commonPrismaService.users.update({
        where: {
          id,
        },
        data: {
          MasterProfile: {
            update: {
              status: StatusEnum.ARCHIVED,
              MasterWeeklySchedule: {
                update: {
                  status: StatusEnum.ARCHIVED,
                },
              },
            },
          },
        },
        ...select,
      });
    }

    throw new BadRequestException('User is not a master');
  }
}
