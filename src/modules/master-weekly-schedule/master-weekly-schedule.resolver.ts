import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';

import { MasterWeeklySchedule } from '../../@generated';
import { GetUserFromRequest } from '../../shared/decorators/get-user-from-request.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { JWTData } from '../auth/interfaces';
import { UpdateMasterWeeklyScheduleArgs } from './dto';
import { MasterWeeklyScheduleResolverService } from './master-weekly-schedule.resolver.service';

@Resolver()
@UseGuards(JwtAuthGuard)
export class MasterWeeklyScheduleResolver {
  constructor(
    private readonly masterWeeklyScheduleService: MasterWeeklyScheduleResolverService,
  ) {}

  @Mutation(() => MasterWeeklySchedule)
  async updateMasterWeeklySchedule(
    @Info()
    info: GraphQLResolveInfo,
    @Args()
    args: UpdateMasterWeeklyScheduleArgs,
    @GetUserFromRequest()
    user: JWTData,
  ) {
    const select = new PrismaSelect(info).value;
    return this.masterWeeklyScheduleService.updateMasterWeeklySchedule(
      select,
      args,
      user,
    );
  }
}
