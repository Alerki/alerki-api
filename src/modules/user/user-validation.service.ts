import { BadRequestException, Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';

import { SystemCode } from '../../shared/data/system-codes.data';
import { StatusEnum } from '../../shared/enums/status.enum';

@Injectable()
export class UserValidationService {
  isUserDefined<T extends Users>(
    user: T | null | undefined,
  ): asserts user is T {
    if (!user) {
      throw new BadRequestException(SystemCode.USER_NOT_EXISTS);
    }
  }

  isUserPublished<T extends Users>(
    user: T | null | undefined,
  ): asserts user is T {
    if (user?.status !== StatusEnum.PUBLISHED) {
      throw new BadRequestException(SystemCode.USER_UNAVAILABLE);
    }
  }

  checkIfUserAvailable<T extends Users>(
    user: T | null | undefined,
  ): asserts user is T {
    this.isUserDefined(user);
    this.isUserPublished(user);
  }
}
