import { Args, Info, Mutation, Resolver } from '@nestjs/graphql';
import { MasterWeeklyScheduleResolverService } from './master-weekly-schedule.resolver.service';
import { MasterWeeklySchedule } from '../../@generated';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UpdateMasterWeeklyScheduleArgs } from './dto';
import { GraphQLResolveInfo } from 'graphql';
import { JWTData } from '../auth/interfaces';
import { GetUserFromRequest } from '../../shared/decorators/get-user-from-request.decorator';
import { PrismaSelect } from '@paljs/plugins';

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
