import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRolesCreateWithoutUser_UserRolesInput } from './user-roles-create-without-user-user-roles.input';
import { Type } from 'class-transformer';
import { UserRolesCreateOrConnectWithoutUser_UserRolesInput } from './user-roles-create-or-connect-without-user-user-roles.input';
import { UserRolesUpsertWithoutUser_UserRolesInput } from './user-roles-upsert-without-user-user-roles.input';
import { Prisma } from '@prisma/client';
import { UserRolesWhereUniqueInput } from './user-roles-where-unique.input';
import { UserRolesUpdateWithoutUser_UserRolesInput } from './user-roles-update-without-user-user-roles.input';

@InputType()
export class UserRolesUpdateOneWithoutUser_UserRolesNestedInput {
  @Field(() => UserRolesCreateWithoutUser_UserRolesInput, { nullable: true })
  @Type(() => UserRolesCreateWithoutUser_UserRolesInput)
  create?: UserRolesCreateWithoutUser_UserRolesInput;

  @Field(() => UserRolesCreateOrConnectWithoutUser_UserRolesInput, {
    nullable: true,
  })
  @Type(() => UserRolesCreateOrConnectWithoutUser_UserRolesInput)
  connectOrCreate?: UserRolesCreateOrConnectWithoutUser_UserRolesInput;

  @Field(() => UserRolesUpsertWithoutUser_UserRolesInput, { nullable: true })
  @Type(() => UserRolesUpsertWithoutUser_UserRolesInput)
  upsert?: UserRolesUpsertWithoutUser_UserRolesInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => UserRolesWhereUniqueInput, { nullable: true })
  @Type(() => UserRolesWhereUniqueInput)
  connect?: Prisma.AtLeast<UserRolesWhereUniqueInput, 'id' | 'name'>;

  @Field(() => UserRolesUpdateWithoutUser_UserRolesInput, { nullable: true })
  @Type(() => UserRolesUpdateWithoutUser_UserRolesInput)
  update?: UserRolesUpdateWithoutUser_UserRolesInput;
}
