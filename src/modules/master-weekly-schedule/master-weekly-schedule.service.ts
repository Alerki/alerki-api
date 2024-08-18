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

    if ((user.MasterProfile?.status as StatusEnum) !== StatusEnum.PUBLISHED) {
      throw new BadRequestException('User is not a master');
    }

    return this.commonPrismaService.masterWeeklySchedule.update({
      where: {
        id: user.MasterProfile?.MasterWeeklyScheduleId,
      },
      data: args,
    });
  }
}
