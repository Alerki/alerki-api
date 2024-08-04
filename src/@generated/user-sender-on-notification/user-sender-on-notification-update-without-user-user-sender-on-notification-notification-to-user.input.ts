import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserNestedInput } from '../user/user-update-one-required-without-user-sender-on-notification-user-sender-on-notification-user-to-user-nested.input';

@InputType()
export class UserSenderOnNotificationUpdateWithoutUser_UserSenderOnNotification_notificationToUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_created?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_updated?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(
    () =>
      UserUpdateOneRequiredWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserNestedInput,
    { nullable: true },
  )
  User_UserSenderOnNotification_userToUser?: UserUpdateOneRequiredWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserNestedInput;
}
