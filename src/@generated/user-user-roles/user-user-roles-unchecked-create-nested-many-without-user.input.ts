import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_UserRolesCreateWithoutUserInput } from './user-user-roles-create-without-user.input';
import { Type } from 'class-transformer';
import { User_UserRolesCreateOrConnectWithoutUserInput } from './user-user-roles-create-or-connect-without-user.input';
import { User_UserRolesCreateManyUserInputEnvelope } from './user-user-roles-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { User_UserRolesWhereUniqueInput } from './user-user-roles-where-unique.input';

@InputType()
export class User_UserRolesUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [User_UserRolesCreateWithoutUserInput], { nullable: true })
  @Type(() => User_UserRolesCreateWithoutUserInput)
  create?: Array<User_UserRolesCreateWithoutUserInput>;

  @Field(() => [User_UserRolesCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => User_UserRolesCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<User_UserRolesCreateOrConnectWithoutUserInput>;

  @Field(() => User_UserRolesCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => User_UserRolesCreateManyUserInputEnvelope)
  createMany?: User_UserRolesCreateManyUserInputEnvelope;

  @Field(() => [User_UserRolesWhereUniqueInput], { nullable: true })
  @Type(() => User_UserRolesWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<User_UserRolesWhereUniqueInput, 'id'>>;
}
