import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ClientProfileUpdateOneRequiredWithoutUserNestedInput } from '../client-profile/client-profile-update-one-required-without-user-nested.input';
import { UserPictureUpdateOneWithoutUserNestedInput } from '../user-picture/user-picture-update-one-without-user-nested.input';
import { UserRecipientOnNotificationUpdateManyWithoutUserNestedInput } from '../user-recipient-on-notification/user-recipient-on-notification-update-many-without-user-nested.input';
import { UserSenderOnNotificationUpdateManyWithoutUser_UserSenderOnNotification_notificationToUserNestedInput } from '../user-sender-on-notification/user-sender-on-notification-update-many-without-user-user-sender-on-notification-notification-to-user-nested.input';
import { UserSenderOnNotificationUpdateManyWithoutUser_UserSenderOnNotification_userToUserNestedInput } from '../user-sender-on-notification/user-sender-on-notification-update-many-without-user-user-sender-on-notification-user-to-user-nested.input';
import { User_SessionUpdateManyWithoutUserNestedInput } from '../user-session/user-session-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutMasterProfileInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_created?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_updated?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    birthDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => ClientProfileUpdateOneRequiredWithoutUserNestedInput, {nullable:true})
    ClientProfile?: ClientProfileUpdateOneRequiredWithoutUserNestedInput;

    @Field(() => UserPictureUpdateOneWithoutUserNestedInput, {nullable:true})
    UserPicture?: UserPictureUpdateOneWithoutUserNestedInput;

    @Field(() => UserRecipientOnNotificationUpdateManyWithoutUserNestedInput, {nullable:true})
    UserRecipientOnNotification?: UserRecipientOnNotificationUpdateManyWithoutUserNestedInput;

    @Field(() => UserSenderOnNotificationUpdateManyWithoutUser_UserSenderOnNotification_notificationToUserNestedInput, {nullable:true})
    UserSenderOnNotification_UserSenderOnNotification_notificationToUser?: UserSenderOnNotificationUpdateManyWithoutUser_UserSenderOnNotification_notificationToUserNestedInput;

    @Field(() => UserSenderOnNotificationUpdateManyWithoutUser_UserSenderOnNotification_userToUserNestedInput, {nullable:true})
    UserSenderOnNotification_UserSenderOnNotification_userToUser?: UserSenderOnNotificationUpdateManyWithoutUser_UserSenderOnNotification_userToUserNestedInput;

    @Field(() => User_SessionUpdateManyWithoutUserNestedInput, {nullable:true})
    User_Session?: User_SessionUpdateManyWithoutUserNestedInput;
}
