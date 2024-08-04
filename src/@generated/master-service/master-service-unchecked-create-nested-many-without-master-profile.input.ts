import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterServiceCreateWithoutMasterProfileInput } from './master-service-create-without-master-profile.input';
import { Type } from 'class-transformer';
import { MasterServiceCreateOrConnectWithoutMasterProfileInput } from './master-service-create-or-connect-without-master-profile.input';
import { MasterServiceCreateManyMasterProfileInputEnvelope } from './master-service-create-many-master-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MasterServiceWhereUniqueInput } from './master-service-where-unique.input';

@InputType()
export class MasterServiceUncheckedCreateNestedManyWithoutMasterProfileInput {
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

  @Field(() => MasterServiceCreateManyMasterProfileInputEnvelope, {
    nullable: true,
  })
  @Type(() => MasterServiceCreateManyMasterProfileInputEnvelope)
  createMany?: MasterServiceCreateManyMasterProfileInputEnvelope;

  @Field(() => [MasterServiceWhereUniqueInput], { nullable: true })
  @Type(() => MasterServiceWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>>;
}
