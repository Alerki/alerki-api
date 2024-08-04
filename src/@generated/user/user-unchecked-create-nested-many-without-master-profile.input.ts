import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMasterProfileInput } from './user-create-without-master-profile.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMasterProfileInput } from './user-create-or-connect-without-master-profile.input';
import { UserCreateManyMasterProfileInputEnvelope } from './user-create-many-master-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutMasterProfileInput {
  @Field(() => [UserCreateWithoutMasterProfileInput], { nullable: true })
  @Type(() => UserCreateWithoutMasterProfileInput)
  create?: Array<UserCreateWithoutMasterProfileInput>;

  @Field(() => [UserCreateOrConnectWithoutMasterProfileInput], {
    nullable: true,
  })
  @Type(() => UserCreateOrConnectWithoutMasterProfileInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutMasterProfileInput>;

  @Field(() => UserCreateManyMasterProfileInputEnvelope, { nullable: true })
  @Type(() => UserCreateManyMasterProfileInputEnvelope)
  createMany?: UserCreateManyMasterProfileInputEnvelope;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<
      UserWhereUniqueInput,
      'id' | 'email' | 'phoneNumber' | 'username'
    >
  >;
}
