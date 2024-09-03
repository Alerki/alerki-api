import { BadRequestException, Injectable } from '@nestjs/common';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { StatusEnum } from '../../shared/enums/status.enum';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly commonPrismaService: CommonPrismaService) {}

  async findUserById(id: string) {
    return this.commonPrismaService.users.findFirst({
      where: {
        id,
        status: StatusEnum.PUBLISHED,
      },
    });
  }

  async findExistingUserById(id: string) {
    const user = await this.findUserById(id);

    if (!user) {
      throw new BadRequestException('User not exists');
    }

    return user;
  }
}
