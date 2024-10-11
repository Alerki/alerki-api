import { BadRequestException, Injectable } from '@nestjs/common';
import { ClientProfiles, MasterProfile, Prisma } from '@prisma/client';

import { SystemCode } from '../../shared/data/system-codes.data';
import { StatusEnum } from '../../shared/enums/status.enum';
import { UserValidationService } from '../user/user-validation.service';

@Injectable()
export class ProfileValidationService {
  constructor(private readonly userValidationService: UserValidationService) {}

  isMasterProfileDefined(
    masterProfile: MasterProfile | null | undefined,
    throwError = false,
  ) {
    if (!masterProfile) {
      if (throwError) {
        throw new BadRequestException(SystemCode.MASTER_NOT_EXISTS);
      }
      return false;
    }
    return true;
  }

  isMasterProfilePublished(
    masterProfile: MasterProfile | null | undefined,
    throwError = false,
  ) {
    if (masterProfile?.status !== StatusEnum.PUBLISHED) {
      if (throwError) {
        throw new BadRequestException(SystemCode.MASTER_UNAVAILABLE);
      }
      return false;
    }
    return true;
  }

  isMasterProfileSetUp(
    masterProfile: MasterProfile | null | undefined,
    throwError = false,
  ) {
    // Check if weekly schedule created
    if (!masterProfile?.MasterWeeklyScheduleId) {
      if (throwError) {
        throw new BadRequestException(SystemCode.MASTER_UNAVAILABLE);
      }
      return false;
    }
    return true;
  }

  checkIfMasterProfileAvailable<T extends MasterProfile>(
    masterProfile: T | null | undefined,
  ): T | false {
    try {
      return this.checkIfMasterProfileAvailableOrThrow(masterProfile);
    } catch (e) {
      return false;
    }
  }

  checkIfMasterProfileAvailableOrThrow<T extends MasterProfile>(
    masterProfile: T | null | undefined,
  ): T {
    this.isMasterProfileDefined(masterProfile, true);
    this.isMasterProfilePublished(masterProfile, true);
    this.isMasterProfileSetUp(masterProfile, true);

    return masterProfile!;
  }

  isClientProfileDefined(
    clientProfile: ClientProfiles | null | undefined,
    throwError = false,
  ) {
    if (!clientProfile) {
      if (throwError) {
        throw new BadRequestException(SystemCode.CLIENT_NOT_EXISTS);
      }
      return false;
    }
    return true;
  }

  isClientProfilePublished(
    clientProfile: ClientProfiles | null | undefined,
    throwError = false,
  ) {
    // Check if weekly schedule created
    if (clientProfile?.status !== StatusEnum.PUBLISHED) {
      if (throwError) {
        throw new BadRequestException(SystemCode.CLIENT_UNAVAILABLE);
      }
      return false;
    }
    return true;
  }

  checkIfClientProfileAvailable<T extends ClientProfiles>(
    clientProfile: T | null | undefined,
  ): T | false {
    try {
      return this.checkIfClientProfileAvailableOrThrow(clientProfile);
    } catch (e) {
      return false;
    }
  }

  checkIfClientProfileAvailableOrThrow<T extends ClientProfiles>(
    clientProfile: T | null | undefined,
  ): T {
    this.isClientProfileDefined(clientProfile, true);
    this.isClientProfilePublished(clientProfile, true);

    return clientProfile!;
  }

  checkIfUserAndMasterProfileAvailableOrThrow<
    T extends Prisma.UsersGetPayload<{ include: { MasterProfile: true } }>,
  >(user: T | undefined | null) {
    this.userValidationService.checkIfUserAvailableOrThrow(user);
    this.checkIfMasterProfileAvailableOrThrow(user?.MasterProfile);
    return user!;
  }

  checkIfUserAndClientProfileAvailableOrThrow(
    user:
      | Prisma.UsersGetPayload<{ include: { ClientProfile: true } }>
      | undefined
      | null,
  ) {
    this.userValidationService.checkIfUserAvailableOrThrow(user);
    this.checkIfClientProfileAvailableOrThrow(user?.ClientProfile);
    return user!;
  }
}
