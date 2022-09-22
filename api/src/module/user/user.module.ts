import { Module } from '@nestjs/common';
import { PrismaService } from '@Shared/services/prisma.service';

@Module({
  providers: [PrismaService],
  controllers: [],
  imports: [],
  exports: [],
})
export class UserModule {}
