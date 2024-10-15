import { Module } from '@nestjs/common';

import { MinIOService } from './minio.service';

@Module({
  providers: [MinIOService],
  exports: [MinIOService],
})
export class MinIOModule {}
