import { BadRequestException, Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';

import { StatusEnum } from '../../shared/enums/status.enum';
import { SystemCode } from '../../shared/data/system-codes.data';

@Injectable()
export class UserValidationService {
  constructor() {}

  isUserDefined(user: Users | null | undefined, throwError = false) {
    if (!user) {
      if (throwError) {
        throw new BadRequestException(SystemCode.USER_NOT_EXISTS);
      }
      return false;
    }
    return true;
  }

  isUserPublished(user: Users | null | undefined, throwError = false) {
    if (user?.status !== StatusEnum.PUBLISHED) {
      if (throwError) {
        throw new BadRequestException(SystemCode.USER_UNAVAILABLE);
      }
      return false;
    }
    return true;
  }

  checkIfUserAvailable(user: Users | null | undefined) {
    try {
      this.isUserDefined(user, true);
      this.isUserPublished(user, true);
    } catch (e) {
      return false;
    }

    return user;
  }

  checkIfUserAvailableOrThrow(user: Users | null | undefined) {
    this.isUserDefined(user, true);
    this.isUserPublished(user, true);

    return user;
  }
}
