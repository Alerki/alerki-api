import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';

@Injectable()
export class UserPictureService {
  private readonly prismaService = prisma;

  constructor() {}

  async create(data: Prisma.Prisma.UserPictureCreateArgs) {
    return this.prismaService.userPicture.create(data);
  }

  async find(data: Prisma.Prisma.UserPictureFindFirstArgs) {
    return this.prismaService.userPicture.findFirst(data);
  }
}
