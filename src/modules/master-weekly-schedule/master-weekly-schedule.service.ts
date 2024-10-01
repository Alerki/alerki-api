import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';

import { UpdateMasterWeeklyScheduleArgs } from './dto';
import { JWTData } from '../auth/interfaces';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { StatusEnum } from '../../shared/enums/status.enum';

@Injectable()
export class MasterWeeklyScheduleService {
  constructor(private readonly commonPrismaService: CommonPrismaService) {}

  async updateMasterWeeklySchedule(
    select: PrismaSelect,
    args: UpdateMasterWeeklyScheduleArgs,
    { id }: JWTData,
  ) {
    const user = await this.commonPrismaService.users.findFirst({
      where: {
        id,
        status: StatusEnum.PUBLISHED,
      },
      include: {
        MasterProfile: {
          include: {
            MasterWeeklySchedule: true,
          },
        },
      },
    });

    if (!user) {
      throw new BadRequestException('User is not exists');
    }

    if (
      !user.MasterProfileId ||
      (user.MasterProfile?.status as StatusEnum) !== StatusEnum.PUBLISHED
    ) {
      throw new BadRequestException('User is not a master');
    }

    if (!user.MasterProfile?.MasterWeeklyScheduleId) {
      const { startAt, endAt } = args;
      if (!startAt || !endAt) {
        throw new BadRequestException(
          'To create weekly schedule startAt and endAt are required',
        );
      }

      return this.commonPrismaService.masterWeeklySchedule.create({
        data: {
          MasterProfile: {
            connect: {
              id: user.MasterProfileId,
            },
          },
          startAt,
          endAt,
          ...args,
        },
      });
    }

    return this.commonPrismaService.masterWeeklySchedule.update({
      where: {
        id: user.MasterProfile?.MasterWeeklyScheduleId,
      },
      data: args,
    });
  }
}
