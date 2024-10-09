import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { StatusEnum } from '../../shared/enums/status.enum';
import { ProfileValidationService } from './profile-validation.service';

@Injectable()
export class ProfileService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly profileValidationService: ProfileValidationService,
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
}
