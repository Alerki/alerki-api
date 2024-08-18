import { Args, Info, Mutation, Resolver } from '@nestjs/graphql';
import { AppointmentService } from './appointment.service';
import { Appointments } from '../../@generated';
import { GetUserFromRequest } from '../../shared/decorators/get-user-from-request.decorator';
import { CreateAppointmentArgs } from './dto';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelect } from '@paljs/plugins';
import { JWTData } from '../auth/interfaces';

@Resolver()
export class AppointmentResolver {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Mutation(() => Appointments)
  async createAppointment(
    @Info()
    info: GraphQLResolveInfo,
    @Args()
    args: CreateAppointmentArgs,
    @GetUserFromRequest()
    user: JWTData,
  ) {
    const select = new PrismaSelect(info).value;
    return this.appointmentService.createAppointment(select, args, user);
  }
}
