import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterScheduleWhereUniqueInput } from './master-schedule-where-unique.input';
import { Type } from 'class-transformer';
import { MasterScheduleCreateInput } from './master-schedule-create.input';
import { MasterScheduleUpdateInput } from './master-schedule-update.input';

@ArgsType()
export class UpsertOneMasterScheduleArgs {
  @Field(() => MasterScheduleWhereUniqueInput, { nullable: false })
  @Type(() => MasterScheduleWhereUniqueInput)
  where!: Prisma.AtLeast<MasterScheduleWhereUniqueInput, 'id'>;

  @Field(() => MasterScheduleCreateInput, { nullable: false })
  @Type(() => MasterScheduleCreateInput)
  create!: MasterScheduleCreateInput;

  @Field(() => MasterScheduleUpdateInput, { nullable: false })
  @Type(() => MasterScheduleUpdateInput)
  update!: MasterScheduleUpdateInput;
}
