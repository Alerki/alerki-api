import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './service/auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../../shared/modules/prisma/prisma.module';
import { JwtInternalService } from './service/internal-jwt.service';

@Module({
  providers: [AuthService, JwtInternalService],
  controllers: [AuthController],
  imports: [PrismaModule, JwtModule],
  exports: [],
})
export class AuthModule {}
