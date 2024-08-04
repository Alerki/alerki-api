import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserSenderOnNotificationUncheckedUpdateManyWithoutUser_UserSenderOnNotification_notificationToUserNestedInput } from '../user-sender-on-notification/user-sender-on-notification-unchecked-update-many-without-user-user-sender-on-notification-notification-to-user-nested.input';
import { UserSenderOnNotificationUncheckedUpdateManyWithoutUser_UserSenderOnNotification_userToUserNestedInput } from '../user-sender-on-notification/user-sender-on-notification-unchecked-update-many-without-user-user-sender-on-notification-user-to-user-nested.input';
import { User_SessionUncheckedUpdateManyWithoutUserNestedInput } from '../user-session/user-session-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutUserRecipientOnNotificationInput {
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

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  picture?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  masterProfile?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  clientProfile?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: StringFieldUpdateOperationsInput;

  @Field(
    () =>
      UserSenderOnNotificationUncheckedUpdateManyWithoutUser_UserSenderOnNotification_notificationToUserNestedInput,
    { nullable: true },
  )
  UserSenderOnNotification_UserSenderOnNotification_notificationToUser?: UserSenderOnNotificationUncheckedUpdateManyWithoutUser_UserSenderOnNotification_notificationToUserNestedInput;

  @Field(
    () =>
      UserSenderOnNotificationUncheckedUpdateManyWithoutUser_UserSenderOnNotification_userToUserNestedInput,
    { nullable: true },
  )
  UserSenderOnNotification_UserSenderOnNotification_userToUser?: UserSenderOnNotificationUncheckedUpdateManyWithoutUser_UserSenderOnNotification_userToUserNestedInput;

  @Field(() => User_SessionUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  User_Session?: User_SessionUncheckedUpdateManyWithoutUserNestedInput;
}
