import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_UserRolesCreateWithoutUserRolesInput } from './user-user-roles-create-without-user-roles.input';
import { Type } from 'class-transformer';
import { User_UserRolesCreateOrConnectWithoutUserRolesInput } from './user-user-roles-create-or-connect-without-user-roles.input';
import { User_UserRolesUpsertWithWhereUniqueWithoutUserRolesInput } from './user-user-roles-upsert-with-where-unique-without-user-roles.input';
import { User_UserRolesCreateManyUserRolesInputEnvelope } from './user-user-roles-create-many-user-roles-input-envelope.input';
import { Prisma } from '@prisma/client';
import { User_UserRolesWhereUniqueInput } from './user-user-roles-where-unique.input';
import { User_UserRolesUpdateWithWhereUniqueWithoutUserRolesInput } from './user-user-roles-update-with-where-unique-without-user-roles.input';
import { User_UserRolesUpdateManyWithWhereWithoutUserRolesInput } from './user-user-roles-update-many-with-where-without-user-roles.input';
import { User_UserRolesScalarWhereInput } from './user-user-roles-scalar-where.input';

@InputType()
export class User_UserRolesUpdateManyWithoutUserRolesNestedInput {
  @Field(() => [User_UserRolesCreateWithoutUserRolesInput], { nullable: true })
  @Type(() => User_UserRolesCreateWithoutUserRolesInput)
  create?: Array<User_UserRolesCreateWithoutUserRolesInput>;

  @Field(() => [User_UserRolesCreateOrConnectWithoutUserRolesInput], {
    nullable: true,
  })
  @Type(() => User_UserRolesCreateOrConnectWithoutUserRolesInput)
  connectOrCreate?: Array<User_UserRolesCreateOrConnectWithoutUserRolesInput>;

  @Field(() => [User_UserRolesUpsertWithWhereUniqueWithoutUserRolesInput], {
    nullable: true,
  })
  @Type(() => User_UserRolesUpsertWithWhereUniqueWithoutUserRolesInput)
  upsert?: Array<User_UserRolesUpsertWithWhereUniqueWithoutUserRolesInput>;

  @Field(() => User_UserRolesCreateManyUserRolesInputEnvelope, {
    nullable: true,
  })
  @Type(() => User_UserRolesCreateManyUserRolesInputEnvelope)
  createMany?: User_UserRolesCreateManyUserRolesInputEnvelope;

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

  @Field(() => [User_UserRolesUpdateWithWhereUniqueWithoutUserRolesInput], {
    nullable: true,
  })
  @Type(() => User_UserRolesUpdateWithWhereUniqueWithoutUserRolesInput)
  update?: Array<User_UserRolesUpdateWithWhereUniqueWithoutUserRolesInput>;

  @Field(() => [User_UserRolesUpdateManyWithWhereWithoutUserRolesInput], {
    nullable: true,
  })
  @Type(() => User_UserRolesUpdateManyWithWhereWithoutUserRolesInput)
  updateMany?: Array<User_UserRolesUpdateManyWithWhereWithoutUserRolesInput>;

  @Field(() => [User_UserRolesScalarWhereInput], { nullable: true })
  @Type(() => User_UserRolesScalarWhereInput)
  deleteMany?: Array<User_UserRolesScalarWhereInput>;
}
