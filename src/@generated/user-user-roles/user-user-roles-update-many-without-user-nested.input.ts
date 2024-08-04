import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_UserRolesCreateWithoutUserInput } from './user-user-roles-create-without-user.input';
import { Type } from 'class-transformer';
import { User_UserRolesCreateOrConnectWithoutUserInput } from './user-user-roles-create-or-connect-without-user.input';
import { User_UserRolesUpsertWithWhereUniqueWithoutUserInput } from './user-user-roles-upsert-with-where-unique-without-user.input';
import { User_UserRolesCreateManyUserInputEnvelope } from './user-user-roles-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { User_UserRolesWhereUniqueInput } from './user-user-roles-where-unique.input';
import { User_UserRolesUpdateWithWhereUniqueWithoutUserInput } from './user-user-roles-update-with-where-unique-without-user.input';
import { User_UserRolesUpdateManyWithWhereWithoutUserInput } from './user-user-roles-update-many-with-where-without-user.input';
import { User_UserRolesScalarWhereInput } from './user-user-roles-scalar-where.input';

@InputType()
export class User_UserRolesUpdateManyWithoutUserNestedInput {
  @Field(() => [User_UserRolesCreateWithoutUserInput], { nullable: true })
  @Type(() => User_UserRolesCreateWithoutUserInput)
  create?: Array<User_UserRolesCreateWithoutUserInput>;

  @Field(() => [User_UserRolesCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => User_UserRolesCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<User_UserRolesCreateOrConnectWithoutUserInput>;

  @Field(() => [User_UserRolesUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => User_UserRolesUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<User_UserRolesUpsertWithWhereUniqueWithoutUserInput>;

  @Field(() => User_UserRolesCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => User_UserRolesCreateManyUserInputEnvelope)
  createMany?: User_UserRolesCreateManyUserInputEnvelope;

  @Field(() => [User_UserRolesWhereUniqueInput], { nullable: true })
  @Type(() => User_UserRolesWhereUniqueInput)
  set?: Array<Prisma.AtLeast<User_UserRolesWhereUniqueInput, 'id'>>;

  @Field(() => [User_UserRolesWhereUniqueInput], { nullable: true })
  @Type(() => User_UserRolesWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<User_UserRolesWhereUniqueInput, 'id'>>;

  @Field(() => [User_UserRolesWhereUniqueInput], { nullable: true })
  @Type(() => User_UserRolesWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<User_UserRolesWhereUniqueInput, 'id'>>;

  @Field(() => [User_UserRolesWhereUniqueInput], { nullable: true })
  @Type(() => User_UserRolesWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<User_UserRolesWhereUniqueInput, 'id'>>;

  @Field(() => [User_UserRolesUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => User_UserRolesUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<User_UserRolesUpdateWithWhereUniqueWithoutUserInput>;

  @Field(() => [User_UserRolesUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => User_UserRolesUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<User_UserRolesUpdateManyWithWhereWithoutUserInput>;

  @Field(() => [User_UserRolesScalarWhereInput], { nullable: true })
  @Type(() => User_UserRolesScalarWhereInput)
  deleteMany?: Array<User_UserRolesScalarWhereInput>;
}
