import { BadRequestException, Injectable } from '@nestjs/common';
import {
  ClientProfiles,
  MasterProfile,
  MasterWeeklySchedule,
  Prisma,
} from '@prisma/client';

import { SystemCode } from '../../shared/data/system-codes.data';
import { StatusEnum } from '../../shared/enums/status.enum';
import { UserValidationService } from '../user/user-validation.service';

@Injectable()
export class ProfileValidationService {
  constructor(private readonly userValidationService: UserValidationService) {}

  isMasterProfileDefined<T extends MasterProfile>(
    masterProfile: T | null | undefined,
  ): asserts masterProfile is T {
    if (!masterProfile) {
      throw new BadRequestException(SystemCode.MASTER_NOT_EXISTS);
    }
  }

  isMasterProfilePublished<T extends MasterProfile>(
    masterProfile: T | null | undefined,
  ): asserts masterProfile is T {
    if (masterProfile?.status !== StatusEnum.PUBLISHED) {
      throw new BadRequestException(SystemCode.MASTER_UNAVAILABLE);
    }
  }

  isMasterProfileSetUp<
    T extends Prisma.MasterProfileGetPayload<{
      include: { MasterWeeklySchedule: true };
    }>,
  >(
    masterProfile: T | null | undefined,
  ): asserts masterProfile is T & {
    MasterWeeklySchedule: NonNullable<T['MasterWeeklySchedule']>;
  } {
    // Check if weekly schedule created
    if (!masterProfile?.MasterWeeklySchedule) {
      throw new BadRequestException(SystemCode.MASTER_UNAVAILABLE);
    }
  }

  checkIfMasterProfileAvailable<
    T extends Prisma.MasterProfileGetPayload<{
      include: { MasterWeeklySchedule: true };
    }>,
  >(masterProfile: T | null | undefined) {
    try {
      this.checkIfMasterProfileAvailableOrThrow(masterProfile);
    } catch (e) {
      return false;
    }
  }

  checkIfMasterProfileAvailableOrThrow<
    T extends Prisma.MasterProfileGetPayload<{
      include: { MasterWeeklySchedule: true };
    }>,
  >(
    masterProfile: T | null | undefined,
  ): asserts masterProfile is T & {
    MasterWeeklySchedule: NonNullable<T['MasterWeeklySchedule']>;
  } {
    this.isMasterProfileDefined(masterProfile);
    this.isMasterProfilePublished(masterProfile);
    this.isMasterProfileSetUp(masterProfile);
  }

  isClientProfileDefined<T extends ClientProfiles>(
    clientProfile: T | null | undefined,
  ): asserts clientProfile is T {
    if (!clientProfile) {
      throw new BadRequestException(SystemCode.CLIENT_NOT_EXISTS);
    }
  }

  isClientProfilePublished<T extends ClientProfiles>(
    clientProfile: T | null | undefined,
  ): asserts clientProfile is T {
    if (clientProfile?.status !== StatusEnum.PUBLISHED) {
      throw new BadRequestException(SystemCode.CLIENT_UNAVAILABLE);
    }
  }

  checkIfClientProfileAvailable<T extends ClientProfiles>(
    clientProfile: T | null | undefined,
  ): asserts clientProfile is T {
    this.isClientProfileDefined(clientProfile);
    this.isClientProfilePublished(clientProfile);
  }

  checkIfUserAndMasterProfileAvailableOrThrow<
    T extends Prisma.UsersGetPayload<{
      include: {
        MasterProfile: {
          include: {
            MasterWeeklySchedule: true;
          };
        };
      };
    }>,
  >(
    user: T | undefined | null,
  ): asserts user is T & {
    MasterProfileId: string;
    MasterProfile: {
      MasterWeeklySchedule: MasterWeeklySchedule;
    };
  } {
    this.userValidationService.checkIfUserAvailable(user);
    this.checkIfMasterProfileAvailableOrThrow(user?.MasterProfile);
  }

  checkIfUserAndClientProfileAvailableOrThrow<
    T extends Prisma.UsersGetPayload<{ include: { ClientProfile: true } }>,
  >(
    user: T | undefined | null,
  ): asserts user is T & {
    ClientProfile: ClientProfiles;
  } {
    this.userValidationService.checkIfUserAvailable(user);
    this.checkIfClientProfileAvailable(user?.ClientProfile);
  }
}
