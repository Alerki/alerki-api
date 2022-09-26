import { ServiceController } from '@Module/service/service.controller';
import { ServiceService } from '@Module/service/service.service';
import { Module } from '@nestjs/common';
import { PrismaService } from '@Shared/services/prisma.service';

@Module({
  providers: [PrismaService, ServiceService],
  controllers: [ServiceController],
  imports: [],
  exports: [ServiceService],
})
export class ServiceModule {}
