import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterWeeklyScheduleUpdateManyMutationInput } from './master-weekly-schedule-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MasterWeeklyScheduleWhereInput } from './master-weekly-schedule-where.input';

@ArgsType()
export class UpdateManyMasterWeeklyScheduleArgs {
  @Field(() => MasterWeeklyScheduleUpdateManyMutationInput, { nullable: false })
  @Type(() => MasterWeeklyScheduleUpdateManyMutationInput)
  data!: MasterWeeklyScheduleUpdateManyMutationInput;

  @Field(() => MasterWeeklyScheduleWhereInput, { nullable: true })
  @Type(() => MasterWeeklyScheduleWhereInput)
  where?: MasterWeeklyScheduleWhereInput;
}
