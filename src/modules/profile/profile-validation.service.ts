import { BadRequestException, Injectable } from '@nestjs/common';

import { StatusEnum } from '../../shared/enums/status.enum';
import { ClientProfiles, MasterProfile, Prisma } from '@prisma/client';
import { SystemCode } from '../../shared/data/system-codes.data';

@Injectable()
export class ProfileValidationService {
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
}
