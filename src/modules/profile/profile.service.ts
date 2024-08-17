import { BadRequestException, Injectable } from '@nestjs/common';

import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { JWTData } from '../auth/interfaces';
import { PrismaSelect } from '@paljs/plugins';

@Injectable()
export class ProfileService {
  constructor(private readonly commonPrismaService: CommonPrismaService) {}

  async getProfile({ id }: JWTData, select: PrismaSelect) {
    const user = await this.commonPrismaService.users.findFirst({
      where: {
        id: id,
      },
      ...select,
    });

    if (!user) {
      throw new BadRequestException('User id not exists');
    }

    return user;
  }
}
