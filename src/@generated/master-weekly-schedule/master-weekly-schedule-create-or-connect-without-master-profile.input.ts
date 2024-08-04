import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterWeeklyScheduleWhereUniqueInput } from './master-weekly-schedule-where-unique.input';
import { Type } from 'class-transformer';
import { MasterWeeklyScheduleCreateWithoutMasterProfileInput } from './master-weekly-schedule-create-without-master-profile.input';

@InputType()
export class MasterWeeklyScheduleCreateOrConnectWithoutMasterProfileInput {
  @Field(() => MasterWeeklyScheduleWhereUniqueInput, { nullable: false })
  @Type(() => MasterWeeklyScheduleWhereUniqueInput)
  where!: Prisma.AtLeast<MasterWeeklyScheduleWhereUniqueInput, 'id'>;

  @Field(() => MasterWeeklyScheduleCreateWithoutMasterProfileInput, {
    nullable: false,
  })
  @Type(() => MasterWeeklyScheduleCreateWithoutMasterProfileInput)
  create!: MasterWeeklyScheduleCreateWithoutMasterProfileInput;
}
