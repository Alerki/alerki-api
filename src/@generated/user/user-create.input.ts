import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientProfileCreateNestedOneWithoutUserInput } from '../client-profile/client-profile-create-nested-one-without-user.input';
import { MasterProfileCreateNestedOneWithoutUserInput } from '../master-profile/master-profile-create-nested-one-without-user.input';
import { UserPictureCreateNestedOneWithoutUserInput } from '../user-picture/user-picture-create-nested-one-without-user.input';
import { User_SessionCreateNestedManyWithoutUserInput } from '../user-session/user-session-create-nested-many-without-user.input';
import { User_UserRolesCreateNestedManyWithoutUserInput } from '../user-user-roles/user-user-roles-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {
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

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => ClientProfileCreateNestedOneWithoutUserInput, {
    nullable: false,
  })
  ClientProfile!: ClientProfileCreateNestedOneWithoutUserInput;

  @Field(() => MasterProfileCreateNestedOneWithoutUserInput, { nullable: true })
  MasterProfile?: MasterProfileCreateNestedOneWithoutUserInput;

  @Field(() => UserPictureCreateNestedOneWithoutUserInput, { nullable: true })
  UserPicture?: UserPictureCreateNestedOneWithoutUserInput;

  @Field(() => User_SessionCreateNestedManyWithoutUserInput, { nullable: true })
  User_Session?: User_SessionCreateNestedManyWithoutUserInput;

  @Field(() => User_UserRolesCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  User_UserRoles?: User_UserRolesCreateNestedManyWithoutUserInput;
}
