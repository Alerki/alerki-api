import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { ClientProfileModule } from '../client/client-profile.module';
import { LocalStrategy } from '../google/google.strategy';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { AuthModuleService } from './services/auth-module.service';
import { JwtTokenService } from './services/jwt-token.service';
import { SessionService } from './services/session.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [
    AuthModuleService,
    AuthService,
    SessionService,
    JwtTokenService,
    LocalStrategy,
    JwtStrategy,
  ],
  imports: [
    UserModule,
    JwtModule,
    // ClientProfileModule
  ],
  exports: [AuthService, SessionService, JwtTokenService],
})
export class AuthModule {}
