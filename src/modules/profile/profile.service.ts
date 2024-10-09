import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { StatusEnum } from '../../shared/enums/status.enum';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { MasterServiceValidationService } from '../master-service/master-service-validation.service';
import { ProfileValidationService } from './profile-validation.service';

@Injectable()
export class ProfileService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly profileValidationService: ProfileValidationService,
    private readonly masterServiceValidationService: MasterServiceValidationService,
  ) {}

  async createMasterProfile() {
    return await this.commonPrismaService.masterProfile.create({
      data: {
        status: StatusEnum.PUBLISHED,
      },
    });
  }

  async findValidMasterProfileOrThrow(
    where: Prisma.UsersFindFirstArgs['where'],
  ) {
    const user = await this.commonPrismaService.users.findFirst({
      where,
      include: {
        MasterProfile: {
          include: {
            MasterWeeklySchedule: true,
          },
        },
        ClientProfile: true,
      },
    });
    return this.profileValidationService.checkIfUserAndMasterProfileAvailableOrThrow(
      user,
    );
  }

  async findValidClientProfileOrThrow(
    where: Prisma.UsersFindFirstArgs['where'],
  ) {
    const user = await this.commonPrismaService.users.findFirst({
      where,
      include: {
        ClientProfile: true,
      },
    });
    return this.profileValidationService.checkIfUserAndClientProfileAvailableOrThrow(
      user,
    );
  }

  async findManyValidMasterProfilesByServiceId(ServiceId: string) {
    // Some of statements in this request commented to reduce complexity
    // Instead of using these statements we use validationService
    const users = await this.commonPrismaService.users.findMany({
      where: {
        // status: StatusEnum.PUBLISHED,
        MasterProfile: {
          // status: StatusEnum.PUBLISHED,
          // MasterWeeklyScheduleId: {
          //   not: null,
          // },
          MasterServices: {
            some: {
              status: StatusEnum.PUBLISHED,
              ServiceId,
            },
          },
        },
      },
      include: {
        MasterProfile: {
          include: {
            MasterServices: {
              where: {
                ServiceId,
              },
            },
          },
        },
      },
    });
    return users.filter((user) => {
      try {
        this.masterServiceValidationService.checkIfMasterServiceAvailableOrThrow(
          user.MasterProfile?.MasterServices[0],
        );
        this.profileValidationService.checkIfUserAndMasterProfileAvailableOrThrow(
          user,
        );
        return true;
      } catch (e) {
        return false;
      }
    });
  }
}
