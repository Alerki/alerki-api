import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { MasterProfileUpdateOneWithoutUserNestedInput } from '../master-profile/master-profile-update-one-without-user-nested.input';
import { UserPictureUpdateOneWithoutUserNestedInput } from '../user-picture/user-picture-update-one-without-user-nested.input';
import { User_SessionUpdateManyWithoutUserNestedInput } from '../user-session/user-session-update-many-without-user-nested.input';
import { User_UserRolesUpdateManyWithoutUserNestedInput } from '../user-user-roles/user-user-roles-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutClientProfileInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_created?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_updated?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  firstName?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  lastName?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  birthDate?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: StringFieldUpdateOperationsInput;

  @Field(() => MasterProfileUpdateOneWithoutUserNestedInput, { nullable: true })
  MasterProfile?: MasterProfileUpdateOneWithoutUserNestedInput;

  @Field(() => UserPictureUpdateOneWithoutUserNestedInput, { nullable: true })
  UserPicture?: UserPictureUpdateOneWithoutUserNestedInput;

  @Field(() => User_SessionUpdateManyWithoutUserNestedInput, { nullable: true })
  User_Session?: User_SessionUpdateManyWithoutUserNestedInput;

  @Field(() => User_UserRolesUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  User_UserRoles?: User_UserRolesUpdateManyWithoutUserNestedInput;
}
