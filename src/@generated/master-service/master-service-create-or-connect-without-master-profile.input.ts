import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterServiceWhereUniqueInput } from './master-service-where-unique.input';
import { Type } from 'class-transformer';
import { MasterServiceCreateWithoutMasterProfileInput } from './master-service-create-without-master-profile.input';

@InputType()
export class MasterServiceCreateOrConnectWithoutMasterProfileInput {
  @Field(() => MasterServiceWhereUniqueInput, { nullable: false })
  @Type(() => MasterServiceWhereUniqueInput)
  where!: Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>;

  @Field(() => MasterServiceCreateWithoutMasterProfileInput, {
    nullable: false,
  })
  @Type(() => MasterServiceCreateWithoutMasterProfileInput)
  create!: MasterServiceCreateWithoutMasterProfileInput;
}
