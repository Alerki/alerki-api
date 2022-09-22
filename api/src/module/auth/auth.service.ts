import { Injectable } from '@nestjs/common';
import { PrismaService } from '@Shared/services/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  async signUp() {}

  async singIn() {}

  async refresh() {}

  async sessions() {}
}
