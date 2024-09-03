import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppointmentArgs } from './dto';
import { JWTData } from '../auth/interfaces';
import { PrismaSelect } from '@paljs/plugins';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { StatusEnum } from '../../shared/enums/status.enum';
import { appendNewDateWithTime } from '../../utils/date-time.util';

@Injectable()
export class AppointmentService {
  constructor(private readonly commonPrismaService: CommonPrismaService) {}

  async createAppointment(
    select: PrismaSelect,
    args: CreateAppointmentArgs,
    user: JWTData,
  ) {
  }
}
