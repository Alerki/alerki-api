import { Injectable } from '@nestjs/common';
import { CreateAppointmentArgs } from './dto';
import { JWTData } from '../auth/interfaces';
import { PrismaSelect } from '@paljs/plugins';

@Injectable()
export class AppointmentService {
  async createAppointment(
    select: PrismaSelect,
    args: CreateAppointmentArgs,
    user: JWTData,
  ) {
    console.log(select, args, user);
  }
}
