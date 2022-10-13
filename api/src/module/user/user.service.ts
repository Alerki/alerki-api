import { MasterProfileService } from '@Module/profile/master-profile.service';
import { ServiceService } from '@Module/service/service.service';
import { CreateMasterServiceDto } from '@Module/user/dto/master.dto';
import { UserDto } from '@Module/user/dto/user.dto';
import { UserPictureService } from '@Module/user/user-picture.service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';

/**
 * User service
 */
@Injectable()
export class UserService {
  readonly prismaService = prisma;

  constructor(
    private readonly pictureService: UserPictureService,
    private readonly serviceService: ServiceService,
  ) { }

  /**
   * Find first user
   *
   * @param args find by arguments
   * @returns user
   */
  async findFirst(args: Prisma.Prisma.UserFindFirstArgs) {
    return this.prismaService.user.findFirst(args);
  }

  /**
   * Find many users
   *
   * @param args find many by arguments
   * @returns user
   */
  async findMany(args: Prisma.Prisma.UserFindManyArgs) {
    return this.prismaService.user.findMany(args);
  }

  /**
   * Create user
   *
   * @param args create arguments
   * @returns
   */
  async create(args: Prisma.Prisma.UserCreateArgs) {
    return this.prismaService.user.create(args);
  }

  /**
   * Get user profile
   *
   * @param param0 get user profile params
   * @returns user profile
   */
  async getUser({ id, username }: Partial<
    Pick<Prisma.User, 'id' | 'username'>
  >) {
    const profile = await this.findFirst({
      where: {
        OR: [
          {
            username: {
              equals: username,
              mode: 'insensitive',
            },
          },
          {
            id,
          },
        ],
      },
      include: {
        clientProfile: true,
        masterProfile: true,
      },
    });

    if (!profile) {
      throw new NotFoundException('User profile not found');
    }

    return new UserDto(profile);
  }

  async findUserById({ id }: Pick<Prisma.User, 'id'>) {
    const candidate = await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });

    if (!candidate) {
      throw new NotFoundException('User not exists');
    }

    return candidate;
  }

  /**
   * Get protected picture
   *
   * @param param0 user ID from access token
   * @returns
   */
  async getPictureProtected({ id }: Pick<Prisma.User, 'id'>) {
    const { pictureId } = await this.findUserById({ id });

    const picture = await this.pictureService.find({
      where: {
        id: pictureId,
      },
    });

    return picture;
  }

  /**
   * Get picture
   *
   * @param param0 picture ID
   * @returns
   */
  async getPicture({ id }: Pick<Prisma.UserPicture, 'id'>) {
    const picture = await this.pictureService.find({
      where: {
        id,
      },
    });

    if (!picture) {
      throw new NotFoundException('Picture not found');
    }

    return picture;
  }
}
