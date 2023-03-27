import { Module } from '@nestjs/common';

import { LocalStrategy } from '../google/google.strategy';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { AuthModuleService } from './services/auth-module.service';
import { SessionService } from './services/session.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  providers: [
    AuthModuleService,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    SessionService,
  ],
  controllers: [AuthController],
  exports: [AuthService, SessionService],
  imports: [UserModule],
})
export class AuthModule {}
