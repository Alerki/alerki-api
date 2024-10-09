import { BadRequestException, Injectable } from '@nestjs/common';
import { MasterService } from '@prisma/client';

import { SystemCode } from '../../shared/data/system-codes.data';
import { StatusEnum } from '../../shared/enums/status.enum';

@Injectable()
export class MasterServiceValidationService {
  isMasterServiceDefined(
    masterService: MasterService | null | undefined,
    throwError = false,
  ) {
    if (!masterService) {
      if (throwError) {
        throw new BadRequestException(SystemCode.MASTER_SERVICE_NOT_EXISTS);
      }
      return false;
    }
    return true;
  }

  isMasterServicePublished(
    masterService: MasterService | null | undefined,
    throwError = false,
  ) {
    if (masterService?.status !== StatusEnum.PUBLISHED) {
      if (throwError) {
        throw new BadRequestException(SystemCode.MASTER_SERVICE_UNAVAILABLE);
      }
      return false;
    }
    return true;
  }

  checkIfUserAvailable(masterService: MasterService | null | undefined) {
    try {
      return this.checkIfMasterServiceAvailableOrThrow(masterService);
    } catch (e) {
      return false;
    }
  }

  checkIfMasterServiceAvailableOrThrow(
    masterService: MasterService | null | undefined,
  ) {
    this.isMasterServiceDefined(masterService, true);
    this.isMasterServicePublished(masterService, true);

    return masterService;
  }
}
