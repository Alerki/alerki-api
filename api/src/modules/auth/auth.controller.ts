import { Controller } from '@nestjs/common';

import { PrismaService } from '@Shared/services/prisma.service';
import { UserService } from '@Module/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
  ) {}
}
