import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterScheduleWhereUniqueInput } from './master-schedule-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMasterScheduleOrThrowArgs {
  @Field(() => MasterScheduleWhereUniqueInput, { nullable: false })
  @Type(() => MasterScheduleWhereUniqueInput)
  where!: Prisma.AtLeast<MasterScheduleWhereUniqueInput, 'id'>;
}
