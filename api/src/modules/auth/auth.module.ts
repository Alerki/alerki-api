import { Module } from '@nestjs/common';
import { UserService } from '@Module/user/user.service';
import { PrismaService } from '@Shared/services/prisma.service';

@Module({
  providers: [UserService, PrismaService],
  controllers: [],
  imports: [],
  exports: [],
})
export class AuthModule {};
