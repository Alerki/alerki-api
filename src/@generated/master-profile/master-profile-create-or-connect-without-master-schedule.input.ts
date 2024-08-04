import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateWithoutMasterScheduleInput } from './master-profile-create-without-master-schedule.input';

@InputType()
export class MasterProfileCreateOrConnectWithoutMasterScheduleInput {
  @Field(() => MasterProfileWhereUniqueInput, { nullable: false })
  @Type(() => MasterProfileWhereUniqueInput)
  where!: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;

  @Field(() => MasterProfileCreateWithoutMasterScheduleInput, {
    nullable: false,
  })
  @Type(() => MasterProfileCreateWithoutMasterScheduleInput)
  create!: MasterProfileCreateWithoutMasterScheduleInput;
}
