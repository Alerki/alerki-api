import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

import { UserModule } from '@Module/user/user.module';
import { ProfileModule } from '@Module/profile/profile.module';
import { AuthController } from '@Module/auth/auth.controller';
import { LocalStrategy } from '@Module/auth/local.strategy';
import { TokensService } from '@Module/auth/tokens.service';
import { AuthService } from '@Module/auth/auth.service';
import { SessionService } from '@Module/auth/session.service';
import { JwtStrategy } from '@Module/auth/jwt.strategy';
import { GoogleStrategy } from '@Module/auth/google.strategy';
import { RoleService } from '@Module/auth/role.service';

@Module({
  controllers: [AuthController],
  providers: [
    LocalStrategy, JwtStrategy,
    JwtService, TokensService,
    AuthService, SessionService,
    GoogleStrategy, RoleService,
  ],
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => ProfileModule),
    PassportModule,
  ],
  exports: [],
})
export class AuthModule {};
