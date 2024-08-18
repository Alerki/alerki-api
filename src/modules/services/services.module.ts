import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesResolver } from './services.resolver';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [ServicesService, ServicesResolver],
  imports: [CommonPrismaModule, AuthModule],
  exports: [ServicesService],
})
export class ServicesModule {}
