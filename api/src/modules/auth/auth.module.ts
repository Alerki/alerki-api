import { forwardRef, Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from '@Src/modules/auth/auth.controller';
import { AuthService } from '@Src/modules/auth/auth.service';
import { GoogleStrategy } from '@Src/modules/auth/google.strategy';
import { JwtStrategy } from '@Src/modules/auth/jwt.strategy';
import { LocalStrategy } from '@Src/modules/auth/local.strategy';
import { RoleService } from '@Src/modules/auth/role.service';
import { SessionService } from '@Src/modules/auth/session.service';
import { TokensService } from '@Src/modules/auth/tokens.service';
import { ProfileModule } from '@Src/modules/profile/profile.module';
import { UserModule } from '@Src/modules/user/user.module';

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
