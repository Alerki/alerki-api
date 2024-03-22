import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import Prisma from '@prisma/client';

import { IJwtTokenData } from '../../auth/interfaces';
import { errorMessages } from '../../shared/data/error-messages.data';
import { PrismaService } from '../../shared/modules/prisma/prisma.service';
import { UserService } from '../../user/services/user.service';
import { checkIfStartTimeLessThanEnd, setDate0 } from '../../util/date.util';
import { UpdateMasterWeeklyScheduleDto } from '../dto/master.dto';
import { MasterProfileService } from './master-profile.service';

@Injectable()
export class MasterWeeklyScheduleService {
  // constructor(
  //   private readonly prismaService: PrismaService,
  //   private readonly userService: UserService,
  //   private readonly masterProfileService: MasterProfileService,
  // ) {}

  // async create<T extends Prisma.Prisma.MasterWeeklyScheduleCreateArgs>(
  //   data: Prisma.Prisma.SelectSubset<
  //     T,
  //     Prisma.Prisma.MasterWeeklyScheduleCreateArgs
  //   >,
  // ) {
  //   return this.prismaService.masterWeeklySchedule.create(data);
  // }

  // async updateWeeklySchedule(
  //   user: IJwtTokenData,
  //   data: UpdateMasterWeeklyScheduleDto,
  // ) {
  //   const userCandidate = await this.userService.findExists({
  //     where: {
  //       id: user.id,
  //     },
  //     include: {
  //       masterProfile: {
  //         include: {
  //           weeklySchedule: true,
  //         },
  //       },
  //     },
  //   });

  //   if (!userCandidate.masterProfile) {
  //     throw new BadRequestException(errorMessages.user.userIsNotAMaster);
  //   }

  //   const updateDate: Omit<
  //     UpdateMasterWeeklyScheduleDto,
  //     'startAt' | 'endAt'
  //   > & {
  //     startAt: Date | string;
  //     endAt: Date | string;
  //   } = data;

  //   // Check if time is valid
  //   if (data.startAt && data.endAt) {
  //     const startAt = new Date(data.startAt);
  //     setDate0(startAt);

  //     const endAt = new Date(data.endAt);
  //     setDate0(endAt);

  //     checkIfStartTimeLessThanEnd(startAt, endAt);

  //     updateDate.startAt = startAt;
  //     updateDate.endAt = endAt;
  //   } else if ((data.startAt && !data.endAt) || (!data.startAt && data.endAt)) {
  //     throw new BadRequestException('Start and end time both required');
  //   }

  //   return this.prismaService.masterWeeklySchedule.update({
  //     where: {
  //       id: userCandidate.masterProfile.weeklySchedule.id,
  //     },
  //     data: updateDate,
  //   });
  // }

  // async getMasterWeeklySchedule(id: string) {
  //   const masterCandidate = await this.masterProfileService.findExists({
  //     where: {
  //       id,
  //     },
  //     include: {
  //       weeklySchedule: true,
  //     },
  //   });

  //   return masterCandidate.weeklySchedule;
  // }

  // async findExists<T extends Prisma.Prisma.MasterWeeklyScheduleFindFirstArgs>(
  //   data: Prisma.Prisma.SelectSubset<
  //     T,
  //     Prisma.Prisma.MasterWeeklyScheduleFindFirstArgs
  //   >,
  //   callback?: () => never,
  // ) {
  //   const candidate =
  //     await this.prismaService.masterWeeklySchedule.findFirst(data);

  //   if (!candidate) {
  //     if (callback) {
  //       callback();
  //     }

  //     throw new NotFoundException('Master weekly schedule is not exists');
  //   }

  //   return candidate;
  // }
}
