import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';

import { MinIOService } from '../minio/minio.service';

@Injectable()
export class ProfilePictureService implements OnModuleInit {
  readonly bucketName = 'user-pictures';
  readonly format = 'jpeg';

  constructor(private readonly minIOService: MinIOService) {}

  async onModuleInit() {
    await this.minIOService.checkIfBucketExistsOrCreate(this.bucketName);
  }

  buildPictureName(id: string) {
    return id + '.' + this.format;
  }

  async savePicture(userId: string, picture: Buffer) {
    const pictureName = this.buildPictureName(userId);
    const result = await this.minIOService.uploadImage(
      this.bucketName,
      picture,
      pictureName,
    );
    return {
      pictureName,
      result,
    };
  }

  async getPicture(fileName: string) {
    try {
      return this.minIOService.getImage(this.bucketName, fileName);
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async deletePicture(userId: string) {
    try {
      return await this.minIOService.deleteItem(
        this.bucketName,
        this.buildPictureName(userId),
      );
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
