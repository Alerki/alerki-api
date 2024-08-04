import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { User_UserRolesWhereUniqueInput } from './user-user-roles-where-unique.input';
import { Type } from 'class-transformer';
import { User_UserRolesUpdateWithoutUserInput } from './user-user-roles-update-without-user.input';

@InputType()
export class User_UserRolesUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => User_UserRolesWhereUniqueInput, { nullable: false })
  @Type(() => User_UserRolesWhereUniqueInput)
  where!: Prisma.AtLeast<User_UserRolesWhereUniqueInput, 'id'>;

  @Field(() => User_UserRolesUpdateWithoutUserInput, { nullable: false })
  @Type(() => User_UserRolesUpdateWithoutUserInput)
  data!: User_UserRolesUpdateWithoutUserInput;
}
