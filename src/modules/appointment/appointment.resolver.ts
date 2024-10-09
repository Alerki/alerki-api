import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';

import { Appointments } from '../../@generated';
import { GetUserFromRequest } from '../../shared/decorators/get-user-from-request.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { JWTData } from '../auth/interfaces';
import { AppointmentService } from './appointment.service';
import {
  CreateAppointmentArgs,
  FindManyClientAppointmentsArgs,
  FindManyMasterAppointmentsArgs,
} from './dto';

@UseGuards(JwtAuthGuard)
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

  @Query(() => [Appointments], { nullable: false })
  async findManyMasterAppointments(
    @Info()
    info: GraphQLResolveInfo,
    @Args()
    args: FindManyMasterAppointmentsArgs,
    @GetUserFromRequest()
    user: JWTData,
  ) {
    const select = new PrismaSelect(info).value;
    return this.appointmentService.findMasterAppointments(select, args, user);
  }

  @Query(() => [Appointments], { nullable: false })
  async findManyClientAppointments(
    @Info()
    info: GraphQLResolveInfo,
    @Args()
    args: FindManyClientAppointmentsArgs,
    @GetUserFromRequest()
    user: JWTData,
  ) {
    const select = new PrismaSelect(info).value;
    return this.appointmentService.findClientAppointments(select, args, user);
  }
}
