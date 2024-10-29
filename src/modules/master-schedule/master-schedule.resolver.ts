import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';

import { MasterSchedule } from '../../@generated';
import { GetUserFromRequest } from '../../shared/decorators/get-user-from-request.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { JWTData } from '../auth/interfaces';
import {
  CreateMasterScheduleArgs,
  DeleteMasterScheduleArgs,
  GetMasterAvailabilityArgs,
  GetMasterMonthScheduleArgs,
  MasterDaySchedule,
  UpdateMasterScheduleArgs,
} from './dto';
import { MasterScheduleResolverService } from './master-schedule.resolver.service';

@Resolver()
@UseGuards(JwtAuthGuard)
export class MasterScheduleResolver {
  constructor(
    private readonly masterScheduleService: MasterScheduleResolverService,
  ) {}

  @Mutation(() => MasterSchedule)
  async createMasterSchedule(
    @Info()
    info: GraphQLResolveInfo,
    @Args()
    args: CreateMasterScheduleArgs,
    @GetUserFromRequest()
    user: JWTData,
  ) {
    const select = new PrismaSelect(info).value;
    return this.masterScheduleService.createMasterSchedule(select, args, user);
  }

  @Mutation(() => MasterSchedule)
  async updateMasterSchedule(
    @Info()
    info: GraphQLResolveInfo,
    @Args()
    args: UpdateMasterScheduleArgs,
    @GetUserFromRequest()
    user: JWTData,
  ) {
    const select = new PrismaSelect(info).value;
    return this.masterScheduleService.updateMasterSchedule(select, args, user);
  }

  @Mutation(() => MasterSchedule, { nullable: true })
  async deleteMasterSchedule(
    @Info()
    info: GraphQLResolveInfo,
    @Args()
    args: DeleteMasterScheduleArgs,
    @GetUserFromRequest()
    user: JWTData,
  ) {
    const select = new PrismaSelect(info).value;
    return this.masterScheduleService.deleteMasterSchedule(select, args, user);
  }

  @Query(() => [MasterDaySchedule], { nullable: false })
  async getMasterMonthAvailability(
    @Args()
    args: GetMasterAvailabilityArgs,
    // @GetUserFromRequest()
    // user: JWTData,
  ) {
    return this.masterScheduleService.getMasterMonthAvailability(args);
  }

  @Query(() => [MasterDaySchedule], { nullable: false })
  async getMasterMonthSchedule(
    @Args()
    args: GetMasterMonthScheduleArgs,
    // @GetUserFromRequest()
    // user: JWTData,
  ) {
    return this.masterScheduleService.getMasterMonthSchedule(args);
  }
}
