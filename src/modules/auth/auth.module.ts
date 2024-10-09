import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './service/auth.service';
import { JwtInternalService } from './service/internal-jwt.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  providers: [AuthService, JwtInternalService, JwtStrategy, LocalStrategy],
  controllers: [AuthController],
  imports: [CommonPrismaModule, UserModule, JwtModule],
  exports: [JwtInternalService],
})
export class AuthModule {}
