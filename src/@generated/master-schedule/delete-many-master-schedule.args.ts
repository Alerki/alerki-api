import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterScheduleWhereInput } from './master-schedule-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMasterScheduleArgs {
  @Field(() => MasterScheduleWhereInput, { nullable: true })
  @Type(() => MasterScheduleWhereInput)
  where?: MasterScheduleWhereInput;
}
