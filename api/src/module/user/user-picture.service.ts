import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';

/**
 * User picture service
 */
@Injectable()
export class UserPictureService {
  /**
   * Prisma service
   */
  private readonly prismaService = prisma;

  /**
   * User picture service constructor
   */
  constructor() { }

  /**
   * Create picture
   *
   * @param data create picture arguments
   * @returns new picture
   */
  async create(data: Prisma.Prisma.UserPictureCreateArgs) {
    return this.prismaService.userPicture.create(data);
  }

  /**
   * Find picture
   *
   * @param data find picture arguments
   * @returns picture if found
   */
  async find(data: Prisma.Prisma.UserPictureFindFirstArgs) {
    return this.prismaService.userPicture.findFirst(data);
  }

  /**
   * Update picture
   *
   * @param param0 picture ID and picture to update
   */
  async update(
    {
      id,
      picture,
    }: Pick<Prisma.UserPicture, 'id' | 'picture'>,
  ) {
    await this.prismaService.userPicture.update({
      where: {
        id,
      },
      data: {
        picture,
      },
    });
  }

  /**
   * Delete picture
   *
   * @param param0 delete picture params
   */
  async delete({ id }: Pick<Prisma.UserPicture, 'id'>) {
    await this.prismaService.userPicture.delete({
      where: {
        id,
      },
    });
  }
}
