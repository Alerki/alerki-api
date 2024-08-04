import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_UserRolesCreateNestedManyWithoutUserRolesInput } from '../user-user-roles/user-user-roles-create-nested-many-without-user-roles.input';

@InputType()
export class UserRolesCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => User_UserRolesCreateNestedManyWithoutUserRolesInput, {
    nullable: true,
  })
  User_UserRoles?: User_UserRolesCreateNestedManyWithoutUserRolesInput;
}
