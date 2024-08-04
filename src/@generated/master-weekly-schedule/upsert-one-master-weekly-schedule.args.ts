import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterWeeklyScheduleWhereUniqueInput } from './master-weekly-schedule-where-unique.input';
import { Type } from 'class-transformer';
import { MasterWeeklyScheduleCreateInput } from './master-weekly-schedule-create.input';
import { MasterWeeklyScheduleUpdateInput } from './master-weekly-schedule-update.input';

@ArgsType()
export class UpsertOneMasterWeeklyScheduleArgs {
  @Field(() => MasterWeeklyScheduleWhereUniqueInput, { nullable: false })
  @Type(() => MasterWeeklyScheduleWhereUniqueInput)
  where!: Prisma.AtLeast<MasterWeeklyScheduleWhereUniqueInput, 'id'>;

  @Field(() => MasterWeeklyScheduleCreateInput, { nullable: false })
  @Type(() => MasterWeeklyScheduleCreateInput)
  create!: MasterWeeklyScheduleCreateInput;

  @Field(() => MasterWeeklyScheduleUpdateInput, { nullable: false })
  @Type(() => MasterWeeklyScheduleUpdateInput)
  update!: MasterWeeklyScheduleUpdateInput;
}
