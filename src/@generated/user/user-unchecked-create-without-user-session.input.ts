import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_UserRolesUncheckedCreateNestedManyWithoutUserInput } from '../user-user-roles/user-user-roles-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutUser_SessionInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @Field(() => String, { nullable: false })
  username!: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;

  @Field(() => String, { nullable: true })
  picture?: string;

  @Field(() => String, { nullable: true })
  masterProfile?: string;

  @Field(() => String, { nullable: false })
  clientProfile!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => User_UserRolesUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  User_UserRoles?: User_UserRolesUncheckedCreateNestedManyWithoutUserInput;
}
