import { BadRequestException, Injectable } from '@nestjs/common';
import { MasterSchedule } from '@prisma/client';
import { SystemCode } from '../../shared/data/system-codes.data';
import { StatusEnum } from '../../shared/enums/status.enum';

@Injectable()
export class MasterScheduleValidationService {
  isMasterScheduleDefined(
    masterSchedule: MasterSchedule | null | undefined,
    throwError = false,
  ) {
    if (!masterSchedule) {
      if (throwError) {
        throw new BadRequestException(SystemCode.MASTER_SCHEDULE_NOT_EXISTS);
      }
      return false;
    }
    return true;
  }

  isMasterSchedulePublished(
    masterSchedule: MasterSchedule | null | undefined,
    throwError = false,
  ) {
    if (masterSchedule?.status !== StatusEnum.PUBLISHED) {
      if (throwError) {
        throw new BadRequestException(SystemCode.MASTER_SCHEDULE_UNAVAILABLE);
      }
      return false;
    }
    return true;
  }

  checkIfMasterScheduleAvailable(
    masterSchedule: MasterSchedule | null | undefined,
  ) {
    try {
      return this.checkIfMasterScheduleAvailableOrThrow(masterSchedule);
    } catch (e) {
      return false;
    }
  }

  checkIfMasterScheduleAvailableOrThrow(
    masterSchedule: MasterSchedule | null | undefined,
  ) {
    this.isMasterScheduleDefined(masterSchedule, true);
    this.isMasterSchedulePublished(masterSchedule, true);
    return masterSchedule;
  }
}
