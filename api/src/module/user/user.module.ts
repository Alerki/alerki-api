import { Module } from '@nestjs/common';
import { PrismaService } from '@Shared/services/prisma.service';
import { UserService } from '@Module/user/user.service';

@Module({
  controllers: [],
  providers: [UserService, PrismaService],
  imports: [],
  exports: [UserService],
})
export class UserModule {}
