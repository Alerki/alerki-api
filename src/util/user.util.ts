import { BadRequestException } from '@nestjs/common';
import Prisma from '@prisma/client';

export function checkIfUserIsMaster(user: Prisma.User) {
  // if (!user.) {
  //   throw new BadRequestException('User is not a master');
  // }
}
