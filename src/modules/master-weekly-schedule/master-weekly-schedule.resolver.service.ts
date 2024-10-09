import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';

import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { JWTData } from '../auth/interfaces';
import { ProfileService } from '../profile/profile.service';
import { UpdateMasterWeeklyScheduleArgs } from './dto';

@Injectable()
export class MasterWeeklyScheduleResolverService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly profileService: ProfileService,
  ) {}

  async updateMasterWeeklySchedule(
    select: PrismaSelect,
    args: UpdateMasterWeeklyScheduleArgs,
    { id }: JWTData,
  ) {
    const user = await this.profileService.findValidMasterProfileOrThrow({
      id,
    });

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
              id: user.MasterProfileId!,
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
