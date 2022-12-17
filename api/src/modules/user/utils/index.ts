import { BadRequestException } from '@nestjs/common';
import Prisma from '@prisma/client';

export const checkScheduleBelongsToMasterMessage =
  'The schedule not belongs to you';

/**
 * Check if the schedule belongs to the master
 *
 * @param schedule schedule
 * @param user user with master profile ID
 */
export const checkScheduleBelongsToMaster = (
  schedule: Pick<Prisma.MasterSchedule, 'masterId'>,
  user: Pick<Prisma.User, 'masterProfileId'>,
): void | never => {
  if (schedule.masterId !== user.masterProfileId) {
    throw new BadRequestException(checkScheduleBelongsToMasterMessage);
  }
};
