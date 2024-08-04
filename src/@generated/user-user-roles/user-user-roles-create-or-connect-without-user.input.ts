import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { User_UserRolesWhereUniqueInput } from './user-user-roles-where-unique.input';
import { Type } from 'class-transformer';
import { User_UserRolesCreateWithoutUserInput } from './user-user-roles-create-without-user.input';

@InputType()
export class User_UserRolesCreateOrConnectWithoutUserInput {
  @Field(() => User_UserRolesWhereUniqueInput, { nullable: false })
  @Type(() => User_UserRolesWhereUniqueInput)
  where!: Prisma.AtLeast<User_UserRolesWhereUniqueInput, 'id'>;

  @Field(() => User_UserRolesCreateWithoutUserInput, { nullable: false })
  @Type(() => User_UserRolesCreateWithoutUserInput)
  create!: User_UserRolesCreateWithoutUserInput;
}
