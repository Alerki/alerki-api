import { BadRequestException, Injectable } from '@nestjs/common';

import { StatusEnum } from '../../shared/enums/status.enum';
import { SystemCode } from '../../shared/data/system-codes.data';
import { Service } from '@prisma/client';

@Injectable()
export class ServicesValidationService {
  isServiceDefined(service: Service | null | undefined, throwError = false) {
    if (!service) {
      if (throwError) {
        throw new BadRequestException(SystemCode.SERVICE_NOT_EXISTS);
      }
      return false;
    }
    return true;
  }

  isServicePublished(service: Service | null | undefined, throwError = false) {
    if (service?.status !== StatusEnum.PUBLISHED) {
      if (throwError) {
        throw new BadRequestException(SystemCode.SERVICE_UNAVAILABLE);
      }
      return false;
    }
    return true;
  }

  checkIfServiceAvailable(service: Service | null | undefined) {
    try {
      this.isServiceDefined(service, true);
      this.isServicePublished(service, true);
    } catch (e) {
      return false;
    }

    return service;
  }

  checkIfServiceAvailableOrThrow(service: Service | null | undefined) {
    this.isServiceDefined(service, true);
    this.isServicePublished(service, true);

    return service;
  }
}
