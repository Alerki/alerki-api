import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterWeeklyScheduleUpdateInput } from './master-weekly-schedule-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MasterWeeklyScheduleWhereUniqueInput } from './master-weekly-schedule-where-unique.input';

@ArgsType()
export class UpdateOneMasterWeeklyScheduleArgs {
  @Field(() => MasterWeeklyScheduleUpdateInput, { nullable: false })
  @Type(() => MasterWeeklyScheduleUpdateInput)
  data!: MasterWeeklyScheduleUpdateInput;

  @Field(() => MasterWeeklyScheduleWhereUniqueInput, { nullable: false })
  @Type(() => MasterWeeklyScheduleWhereUniqueInput)
  where!: Prisma.AtLeast<MasterWeeklyScheduleWhereUniqueInput, 'id'>;
}
