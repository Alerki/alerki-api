import { Args, Info, Mutation, Resolver } from '@nestjs/graphql';
import { MasterScheduleService } from './master-schedule.service';
import { MasterSchedule } from '../../@generated';
import { GraphQLResolveInfo } from 'graphql';
import {
  CreateMasterScheduleArgs,
  DeleteMasterScheduleArgs,
  UpdateMasterScheduleArgs,
} from './dto';
import { GetUserFromRequest } from '../../shared/decorators/get-user-from-request.decorator';
import { JWTData } from '../auth/interfaces';
import { PrismaSelect } from '@paljs/plugins';

@Resolver()
export class MasterScheduleResolver {
  constructor(private readonly masterScheduleService: MasterScheduleService) {}

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

  @Mutation(() => MasterSchedule)
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
}
