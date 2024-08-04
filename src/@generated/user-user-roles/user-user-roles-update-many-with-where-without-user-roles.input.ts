import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_UserRolesScalarWhereInput } from './user-user-roles-scalar-where.input';
import { Type } from 'class-transformer';
import { User_UserRolesUncheckedUpdateManyWithoutUser_UserRolesInput } from './user-user-roles-unchecked-update-many-without-user-user-roles.input';

@InputType()
export class User_UserRolesUpdateManyWithWhereWithoutUserRolesInput {
  @Field(() => User_UserRolesScalarWhereInput, { nullable: false })
  @Type(() => User_UserRolesScalarWhereInput)
  where!: User_UserRolesScalarWhereInput;

  @Field(() => User_UserRolesUncheckedUpdateManyWithoutUser_UserRolesInput, {
    nullable: false,
  })
  @Type(() => User_UserRolesUncheckedUpdateManyWithoutUser_UserRolesInput)
  data!: User_UserRolesUncheckedUpdateManyWithoutUser_UserRolesInput;
}
