import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { StatusEnum } from '../../shared/enums/status.enum';
import { ProfileValidationService } from './profile-validation.service';
import { UserValidationService } from '../user/user-validation.service';

@Injectable()
export class ProfileService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly userValidationService: UserValidationService,
    private readonly profileValidationService: ProfileValidationService,
  ) {}

  async createMasterProfile() {
    return await this.commonPrismaService.masterProfile.create({
      data: {
        status: StatusEnum.PUBLISHED,
      },
    });
  }

  checkIfMasterProfileAvailableOrThrow(
    user:
      | Prisma.UsersGetPayload<{ include: { MasterProfile: true } }>
      | undefined
      | null,
  ) {
    this.userValidationService.checkIfUserAvailableOrThrow(user);
    this.profileValidationService.checkIfMasterProfileAvailableOrThrow(
      user?.MasterProfile,
    );
    return user!;
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
    return this.checkIfMasterProfileAvailableOrThrow(user);
  }
}
