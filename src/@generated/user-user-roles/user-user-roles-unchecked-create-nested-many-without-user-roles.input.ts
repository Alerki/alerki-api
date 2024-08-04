import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_UserRolesCreateWithoutUserRolesInput } from './user-user-roles-create-without-user-roles.input';
import { Type } from 'class-transformer';
import { User_UserRolesCreateOrConnectWithoutUserRolesInput } from './user-user-roles-create-or-connect-without-user-roles.input';
import { User_UserRolesCreateManyUserRolesInputEnvelope } from './user-user-roles-create-many-user-roles-input-envelope.input';
import { Prisma } from '@prisma/client';
import { User_UserRolesWhereUniqueInput } from './user-user-roles-where-unique.input';

@InputType()
export class User_UserRolesUncheckedCreateNestedManyWithoutUserRolesInput {
  @Field(() => [User_UserRolesCreateWithoutUserRolesInput], { nullable: true })
  @Type(() => User_UserRolesCreateWithoutUserRolesInput)
  create?: Array<User_UserRolesCreateWithoutUserRolesInput>;

  @Field(() => [User_UserRolesCreateOrConnectWithoutUserRolesInput], {
    nullable: true,
  })
  @Type(() => User_UserRolesCreateOrConnectWithoutUserRolesInput)
  connectOrCreate?: Array<User_UserRolesCreateOrConnectWithoutUserRolesInput>;

  @Field(() => User_UserRolesCreateManyUserRolesInputEnvelope, {
    nullable: true,
  })
  @Type(() => User_UserRolesCreateManyUserRolesInputEnvelope)
  createMany?: User_UserRolesCreateManyUserRolesInputEnvelope;

  @Field(() => [User_UserRolesWhereUniqueInput], { nullable: true })
  @Type(() => User_UserRolesWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<User_UserRolesWhereUniqueInput, 'id'>>;
}
