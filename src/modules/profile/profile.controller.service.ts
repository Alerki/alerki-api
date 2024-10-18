import { Injectable, NotFoundException } from '@nestjs/common';
import * as sharp from 'sharp';

import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { ENV } from '../config';
import { UserService } from '../user/user.service';
import { ProfilePictureService } from './profile-picture.service';

@Injectable()
export class ProfileControllerService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly userService: UserService,
    private readonly profilePictureService: ProfilePictureService,
  ) {}

  async updateProfilePicture(id: string, file: Express.Multer.File) {
    const user = await this.userService.findValidUser({
      id,
    });

    const processedImage = await sharp(file.buffer)
      .resize(ENV.PROFILE_PICTURE_SIZE)
      .toFormat(this.profilePictureService.format)
      .toBuffer();

    const { pictureName } = await this.profilePictureService.savePicture(
      user.id,
      processedImage,
    );

    if (user.pictureUrl) {
      try {
        await this.profilePictureService.deletePicture(user.pictureUrl);
      } catch (e) {}
    }

    await this.commonPrismaService.users.update({
      where: {
        id,
      },
      data: {
        pictureUrl: pictureName,
      },
    });

    return pictureName;
  }

  async getProfilePicture(pictureName: string) {
    return this.profilePictureService.getPicture(pictureName);
  }

  async deleteProfilePicture(id: string) {
    const user = await this.userService.findValidUser({
      id,
    });

    if (!user.pictureUrl) {
      throw new NotFoundException();
    }

    await this.profilePictureService.deletePicture(user.pictureUrl);

    await this.commonPrismaService.users.update({
      where: {
        id,
      },
      data: {
        pictureUrl: null,
      },
    });
  }
}
