import { Body, Controller } from '@nestjs/common';

import { PrismaService } from '@Shared/services/prisma.service';
import { UserService } from '@Module/user/user.service';
import {
  SignIn,
  SignUp,
  Refresh,
} from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
  ) {}

  async signUp(@Body() body: SignUp.Dto) {}

  async signIn(@Body() body: SignIn.Dto) {}

  async logOut() {}

  async refresh(@Body() body: Refresh.Dto) {}

  async sessions() {}
}
