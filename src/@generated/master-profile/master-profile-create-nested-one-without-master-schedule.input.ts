import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileCreateWithoutMasterScheduleInput } from './master-profile-create-without-master-schedule.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateOrConnectWithoutMasterScheduleInput } from './master-profile-create-or-connect-without-master-schedule.input';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';

@InputType()
export class MasterProfileCreateNestedOneWithoutMasterScheduleInput {
  @Field(() => MasterProfileCreateWithoutMasterScheduleInput, {
    nullable: true,
  })
  @Type(() => MasterProfileCreateWithoutMasterScheduleInput)
  create?: MasterProfileCreateWithoutMasterScheduleInput;

  @Field(() => MasterProfileCreateOrConnectWithoutMasterScheduleInput, {
    nullable: true,
  })
  @Type(() => MasterProfileCreateOrConnectWithoutMasterScheduleInput)
  connectOrCreate?: MasterProfileCreateOrConnectWithoutMasterScheduleInput;

  @Field(() => MasterProfileWhereUniqueInput, { nullable: true })
  @Type(() => MasterProfileWhereUniqueInput)
  connect?: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;
}
