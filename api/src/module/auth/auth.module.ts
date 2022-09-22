import { Module } from '@nestjs/common';

import { UserService } from '@Module/user/user.service';
import { PrismaService } from '@Shared/services/prisma.service';
import { AuthController } from '@Module/auth/auth.controller';

@Module({
  providers: [UserService, PrismaService],
  controllers: [AuthController],
  imports: [],
  exports: [],
})
export class AuthModule {};
