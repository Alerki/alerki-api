import { forwardRef, Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from '@Module/auth/auth.controller';
import { AuthService } from '@Module/auth/auth.service';
import { GoogleStrategy } from '@Module/auth/google.strategy';
import { JwtStrategy } from '@Module/auth/jwt.strategy';
import { LocalStrategy } from '@Module/auth/local.strategy';
import { RoleService } from '@Module/auth/role.service';
import { SessionService } from '@Module/auth/session.service';
import { TokensService } from '@Module/auth/tokens.service';
import { ProfileModule } from '@Module/profile/profile.module';
import { UserModule } from '@Module/user/user.module';

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
  exports: [
    LocalStrategy, JwtStrategy,
    JwtService, TokensService,
    AuthService, SessionService,
    GoogleStrategy, RoleService,
  ],
})
export class AuthModule { };
