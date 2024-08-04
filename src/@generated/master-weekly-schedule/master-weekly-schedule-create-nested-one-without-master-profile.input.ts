import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterWeeklyScheduleCreateWithoutMasterProfileInput } from './master-weekly-schedule-create-without-master-profile.input';
import { Type } from 'class-transformer';
import { MasterWeeklyScheduleCreateOrConnectWithoutMasterProfileInput } from './master-weekly-schedule-create-or-connect-without-master-profile.input';
import { Prisma } from '@prisma/client';
import { MasterWeeklyScheduleWhereUniqueInput } from './master-weekly-schedule-where-unique.input';

@InputType()
export class MasterWeeklyScheduleCreateNestedOneWithoutMasterProfileInput {
  @Field(() => MasterWeeklyScheduleCreateWithoutMasterProfileInput, {
    nullable: true,
  })
  @Type(() => MasterWeeklyScheduleCreateWithoutMasterProfileInput)
  create?: MasterWeeklyScheduleCreateWithoutMasterProfileInput;

  @Field(() => MasterWeeklyScheduleCreateOrConnectWithoutMasterProfileInput, {
    nullable: true,
  })
  @Type(() => MasterWeeklyScheduleCreateOrConnectWithoutMasterProfileInput)
  connectOrCreate?: MasterWeeklyScheduleCreateOrConnectWithoutMasterProfileInput;

  @Field(() => MasterWeeklyScheduleWhereUniqueInput, { nullable: true })
  @Type(() => MasterWeeklyScheduleWhereUniqueInput)
  connect?: Prisma.AtLeast<MasterWeeklyScheduleWhereUniqueInput, 'id'>;
}
