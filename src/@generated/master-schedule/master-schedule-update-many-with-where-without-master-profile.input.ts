import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterScheduleScalarWhereInput } from './master-schedule-scalar-where.input';
import { Type } from 'class-transformer';
import { MasterScheduleUpdateManyMutationInput } from './master-schedule-update-many-mutation.input';

@InputType()
export class MasterScheduleUpdateManyWithWhereWithoutMasterProfileInput {
  @Field(() => MasterScheduleScalarWhereInput, { nullable: false })
  @Type(() => MasterScheduleScalarWhereInput)
  where!: MasterScheduleScalarWhereInput;

  @Field(() => MasterScheduleUpdateManyMutationInput, { nullable: false })
  @Type(() => MasterScheduleUpdateManyMutationInput)
  data!: MasterScheduleUpdateManyMutationInput;
}
