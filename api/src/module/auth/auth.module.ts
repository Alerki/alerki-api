import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

import { PrismaService } from '@Shared/services/prisma.service';
import { AuthController } from '@Module/auth/auth.controller';
import { UserModule } from '@Module/user/user.module';
import { LocalStrategy } from '@Module/auth/local.strategy';
import { TokensService } from '@Module/auth/tokens.service';
import { ProfileModule } from '@Module/profile/profile.module';

@Module({
  controllers: [AuthController],
  providers: [PrismaService, LocalStrategy, JwtService, TokensService],
  imports: [forwardRef(() => UserModule), PassportModule, ProfileModule],
  exports: [],
})
export class AuthModule {};
