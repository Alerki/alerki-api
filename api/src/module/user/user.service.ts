import { MasterProfileService } from '@Module/profile/master-profile.service';
import { ServiceService } from '@Module/service/service.service';
import { CreateMasterServiceDto } from '@Module/user/dto/master.dto';
import { PatchUserDto, UserDto } from '@Module/user/dto/user.dto';
import { UserPictureService } from '@Module/user/user-picture.service';
import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import Prisma from '@prisma/client';
import * as sharp from 'sharp';
import * as imageSize from 'buffer-image-size';
import * as imageType from 'image-type';

import { prisma } from '@Shared/services/prisma.service';
import * as ApiConfig from '@Config/api/property.config';

/**
 * User service
 */
@Injectable()
export class UserService {
  readonly prismaService = prisma;

  constructor(
    private readonly userPictureService: UserPictureService,
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
   * Get picture
   *
   * @param param0 picture ID
   * @returns
   */
  async getPicture({ id }: Pick<Prisma.UserPicture, 'id'>) {
    const picture = await this.userPictureService.find({
      where: {
        id,
      },
    });

    if (!picture) {
      throw new NotFoundException('Picture not found');
    }

    return picture;
  }

  async patchUser(
    args: { data: PatchUserDto } & Pick<Prisma.User, 'id'>,
  ) {
    const { id, data } = args;

    await this.findUserById({ id });

    return await this.prismaService.user.update({
      where: {
        id,
      },
      data,
    });
  }

  /**
   * Path user picture
   *
   * @param param0 path picture arguments
   */
  async patchUserPicture(
    {
      id,
      picture,
    }: Pick<Prisma.User, 'id'> & { picture: Express.Multer.File },
  ) {
    const candidate = await this.findUserById({ id });

    let pictureBuffer: Buffer = picture.buffer;

    const pictureType = imageType(pictureBuffer);

    if (!pictureType) {
      throw new BadRequestException(
        'Validation failed (expected type is /^(jpg|jpeg|png|heif)$/)',
      );
    }

    if (!pictureType.ext.match(ApiConfig.User.availablePictureExtensions)) {
      throw new BadRequestException(
        'Validation failed (expected type is /^(jpg|jpeg|png|heif)$/)',
      );
    }

    const { width, height } = imageSize(pictureBuffer);

    if (width > 100 || height > 100) {
      pictureBuffer = await sharp(picture.buffer)
        .resize(50, 50)
        .jpeg({ mozjpeg: true })
        .toBuffer();
    }

    if (candidate.pictureId) {
      await this.userPictureService.update({
        id: candidate.pictureId,
        picture: pictureBuffer,
      });
    } else {
      await this.userPictureService.create({
        data: {
          picture: pictureBuffer,
          user: {
            connect: {
              id,
            },
          },
        },
      });
    }
  }
}
