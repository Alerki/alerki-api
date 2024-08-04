import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { User_UserRolesWhereUniqueInput } from './user-user-roles-where-unique.input';
import { Type } from 'class-transformer';
import { User_UserRolesUpdateWithoutUserRolesInput } from './user-user-roles-update-without-user-roles.input';
import { User_UserRolesCreateWithoutUserRolesInput } from './user-user-roles-create-without-user-roles.input';

@InputType()
export class User_UserRolesUpsertWithWhereUniqueWithoutUserRolesInput {
  @Field(() => User_UserRolesWhereUniqueInput, { nullable: false })
  @Type(() => User_UserRolesWhereUniqueInput)
  where!: Prisma.AtLeast<User_UserRolesWhereUniqueInput, 'id'>;

  @Field(() => User_UserRolesUpdateWithoutUserRolesInput, { nullable: false })
  @Type(() => User_UserRolesUpdateWithoutUserRolesInput)
  update!: User_UserRolesUpdateWithoutUserRolesInput;

  @Field(() => User_UserRolesCreateWithoutUserRolesInput, { nullable: false })
  @Type(() => User_UserRolesCreateWithoutUserRolesInput)
  create!: User_UserRolesCreateWithoutUserRolesInput;
}
