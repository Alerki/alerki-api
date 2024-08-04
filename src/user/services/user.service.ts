import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import Prisma from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findExists<T extends Prisma.Prisma.UserFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.UserFindFirstArgs>,
    callback?: () => never,
  ) {
    const candidate = await this.prismaService.user.findFirst(data);

    if (!candidate) {
      if (callback) {
        callback();
      }

      throw new NotFoundException('User not exists');
    }

    return candidate;
  }

  // async findExistsMaster<T extends Prisma.Prisma.UserFindFirstArgs>(
  //   data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.UserFindFirstArgs>,
  //   callback?: () => never,
  // ) {
  //   const candidate = await this.prismaService.user.findFirst(data);

  //   if (!candidate) {
  //     if (callback) {
  //       callback();
  //     }

  //     throw new NotFoundException('User not exists');
  //   }

  //   // if (!candidate.isMaster) {
  //   //   throw new BadRequestException('User is not a master');
  //   // }

  //   return candidate as typeof candidate & {
  //     masterProfileId: string;
  //     masterProfile: Prisma.MasterProfile;
  //   };
  // }
}
