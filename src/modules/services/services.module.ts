import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesResolver } from './services.resolver';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';

@Module({
  providers: [ServicesService, ServicesResolver],
  imports: [CommonPrismaModule],
  exports: [ServicesResolver],
})
export class ServicesModule {}
