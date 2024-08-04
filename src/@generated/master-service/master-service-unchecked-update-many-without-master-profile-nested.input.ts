import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterServiceCreateWithoutMasterProfileInput } from './master-service-create-without-master-profile.input';
import { Type } from 'class-transformer';
import { MasterServiceCreateOrConnectWithoutMasterProfileInput } from './master-service-create-or-connect-without-master-profile.input';
import { MasterServiceUpsertWithWhereUniqueWithoutMasterProfileInput } from './master-service-upsert-with-where-unique-without-master-profile.input';
import { MasterServiceCreateManyMasterProfileInputEnvelope } from './master-service-create-many-master-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MasterServiceWhereUniqueInput } from './master-service-where-unique.input';
import { MasterServiceUpdateWithWhereUniqueWithoutMasterProfileInput } from './master-service-update-with-where-unique-without-master-profile.input';
import { MasterServiceUpdateManyWithWhereWithoutMasterProfileInput } from './master-service-update-many-with-where-without-master-profile.input';
import { MasterServiceScalarWhereInput } from './master-service-scalar-where.input';

@InputType()
export class MasterServiceUncheckedUpdateManyWithoutMasterProfileNestedInput {
  @Field(() => [MasterServiceCreateWithoutMasterProfileInput], {
    nullable: true,
  })
  @Type(() => MasterServiceCreateWithoutMasterProfileInput)
  create?: Array<MasterServiceCreateWithoutMasterProfileInput>;

  @Field(() => [MasterServiceCreateOrConnectWithoutMasterProfileInput], {
    nullable: true,
  })
  @Type(() => MasterServiceCreateOrConnectWithoutMasterProfileInput)
  connectOrCreate?: Array<MasterServiceCreateOrConnectWithoutMasterProfileInput>;

  @Field(() => [MasterServiceUpsertWithWhereUniqueWithoutMasterProfileInput], {
    nullable: true,
  })
  @Type(() => MasterServiceUpsertWithWhereUniqueWithoutMasterProfileInput)
  upsert?: Array<MasterServiceUpsertWithWhereUniqueWithoutMasterProfileInput>;

  @Field(() => MasterServiceCreateManyMasterProfileInputEnvelope, {
    nullable: true,
  })
  @Type(() => MasterServiceCreateManyMasterProfileInputEnvelope)
  createMany?: MasterServiceCreateManyMasterProfileInputEnvelope;

  @Field(() => [MasterServiceWhereUniqueInput], { nullable: true })
  @Type(() => MasterServiceWhereUniqueInput)
  set?: Array<Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>>;

  @Field(() => [MasterServiceWhereUniqueInput], { nullable: true })
  @Type(() => MasterServiceWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>>;

  @Field(() => [MasterServiceWhereUniqueInput], { nullable: true })
  @Type(() => MasterServiceWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>>;

  @Field(() => [MasterServiceWhereUniqueInput], { nullable: true })
  @Type(() => MasterServiceWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>>;

  @Field(() => [MasterServiceUpdateWithWhereUniqueWithoutMasterProfileInput], {
    nullable: true,
  })
  @Type(() => MasterServiceUpdateWithWhereUniqueWithoutMasterProfileInput)
  update?: Array<MasterServiceUpdateWithWhereUniqueWithoutMasterProfileInput>;

  @Field(() => [MasterServiceUpdateManyWithWhereWithoutMasterProfileInput], {
    nullable: true,
  })
  @Type(() => MasterServiceUpdateManyWithWhereWithoutMasterProfileInput)
  updateMany?: Array<MasterServiceUpdateManyWithWhereWithoutMasterProfileInput>;

  @Field(() => [MasterServiceScalarWhereInput], { nullable: true })
  @Type(() => MasterServiceScalarWhereInput)
  deleteMany?: Array<MasterServiceScalarWhereInput>;
}
