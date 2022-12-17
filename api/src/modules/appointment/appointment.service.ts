import { Injectable } from '@nestjs/common';

import { prisma } from '@Shared/services/prisma.service';

@Injectable()
export class AppointmentService {
  private readonly prismaService = prisma;

  constructor() {}
}
