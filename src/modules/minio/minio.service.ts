import { Injectable } from '@nestjs/common';
import * as Minio from 'minio';

import { ENV } from '../config';

@Injectable()
export class MinIOService {
  readonly minIOClient: Minio.Client;

  constructor() {
    this.minIOClient = new Minio.Client({
      endPoint: ENV.MINIO_ENDPOINT,
      port: ENV.MINIO_PORT,
      useSSL: false,
      accessKey: ENV.MINIO_ACCESS_KEY,
      secretKey: ENV.MINIO_SECRET_KEY,
    });
  }

  async uploadImage(
    bucketName: string,
    imageBuffer: Buffer,
    imageName: string,
  ) {
    return this.minIOClient.putObject(bucketName, imageName, imageBuffer);
  }

  async getImage(bucketName: string, imageName: string) {
    return this.minIOClient.getObject(bucketName, imageName);
  }

  async deleteItem(bucketName: string, imageName: string) {
    return this.minIOClient.removeObject(bucketName, imageName);
  }

  async bucketExists(bucketName: string) {
    return this.minIOClient.bucketExists(bucketName);
  }

  async checkIfBucketExistsOrCreate(bucketName: string) {
    const exists = await this.bucketExists(bucketName);

    if (!exists) {
      await this.minIOClient.makeBucket(bucketName);
    }
  }
}
