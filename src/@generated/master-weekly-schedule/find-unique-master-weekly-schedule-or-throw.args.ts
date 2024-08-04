import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterWeeklyScheduleWhereUniqueInput } from './master-weekly-schedule-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMasterWeeklyScheduleOrThrowArgs {
  @Field(() => MasterWeeklyScheduleWhereUniqueInput, { nullable: false })
  @Type(() => MasterWeeklyScheduleWhereUniqueInput)
  where!: Prisma.AtLeast<MasterWeeklyScheduleWhereUniqueInput, 'id'>;
}
