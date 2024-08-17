import { Module } from '@nestjs/common';
import { CommonPrismaService } from './prisma.service';

@Module({
  providers: [CommonPrismaService],
  exports: [CommonPrismaService],
})
export class CommonPrismaModule {}
