import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMasterProfileInput } from './user-create-without-master-profile.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMasterProfileInput } from './user-create-or-connect-without-master-profile.input';
import { UserUpsertWithWhereUniqueWithoutMasterProfileInput } from './user-upsert-with-where-unique-without-master-profile.input';
import { UserCreateManyMasterProfileInputEnvelope } from './user-create-many-master-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutMasterProfileInput } from './user-update-with-where-unique-without-master-profile.input';
import { UserUpdateManyWithWhereWithoutMasterProfileInput } from './user-update-many-with-where-without-master-profile.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutMasterProfileNestedInput {
  @Field(() => [UserCreateWithoutMasterProfileInput], { nullable: true })
  @Type(() => UserCreateWithoutMasterProfileInput)
  create?: Array<UserCreateWithoutMasterProfileInput>;

  @Field(() => [UserCreateOrConnectWithoutMasterProfileInput], {
    nullable: true,
  })
  @Type(() => UserCreateOrConnectWithoutMasterProfileInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutMasterProfileInput>;

  @Field(() => [UserUpsertWithWhereUniqueWithoutMasterProfileInput], {
    nullable: true,
  })
  @Type(() => UserUpsertWithWhereUniqueWithoutMasterProfileInput)
  upsert?: Array<UserUpsertWithWhereUniqueWithoutMasterProfileInput>;

  @Field(() => UserCreateManyMasterProfileInputEnvelope, { nullable: true })
  @Type(() => UserCreateManyMasterProfileInputEnvelope)
  createMany?: UserCreateManyMasterProfileInputEnvelope;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<
      UserWhereUniqueInput,
      'id' | 'email' | 'phoneNumber' | 'username'
    >
  >;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<
      UserWhereUniqueInput,
      'id' | 'email' | 'phoneNumber' | 'username'
    >
  >;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<
      UserWhereUniqueInput,
      'id' | 'email' | 'phoneNumber' | 'username'
    >
  >;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<
      UserWhereUniqueInput,
      'id' | 'email' | 'phoneNumber' | 'username'
    >
  >;

  @Field(() => [UserUpdateWithWhereUniqueWithoutMasterProfileInput], {
    nullable: true,
  })
  @Type(() => UserUpdateWithWhereUniqueWithoutMasterProfileInput)
  update?: Array<UserUpdateWithWhereUniqueWithoutMasterProfileInput>;

  @Field(() => [UserUpdateManyWithWhereWithoutMasterProfileInput], {
    nullable: true,
  })
  @Type(() => UserUpdateManyWithWhereWithoutMasterProfileInput)
  updateMany?: Array<UserUpdateManyWithWhereWithoutMasterProfileInput>;

  @Field(() => [UserScalarWhereInput], { nullable: true })
  @Type(() => UserScalarWhereInput)
  deleteMany?: Array<UserScalarWhereInput>;
}
