import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './service/auth.service';
import { AuthController } from './auth.controller';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { JwtInternalService } from './service/internal-jwt.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  providers: [AuthService, JwtInternalService, JwtStrategy, LocalStrategy],
  controllers: [AuthController],
  imports: [CommonPrismaModule, JwtModule],
  exports: [],
})
export class AuthModule {}
