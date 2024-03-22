import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecipientOnNotificationUncheckedCreateNestedManyWithoutUserInput } from '../user-recipient-on-notification/user-recipient-on-notification-unchecked-create-nested-many-without-user.input';
import { UserSenderOnNotificationUncheckedCreateNestedManyWithoutUser_UserSenderOnNotification_notificationToUserInput } from '../user-sender-on-notification/user-sender-on-notification-unchecked-create-nested-many-without-user-user-sender-on-notification-notification-to-user.input';
import { UserSenderOnNotificationUncheckedCreateNestedManyWithoutUser_UserSenderOnNotification_userToUserInput } from '../user-sender-on-notification/user-sender-on-notification-unchecked-create-nested-many-without-user-user-sender-on-notification-user-to-user.input';

@InputType()
export class UserUncheckedCreateWithoutUser_SessionInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;

    @Field(() => String, {nullable:true})
    picture?: string;

    @Field(() => String, {nullable:true})
    masterProfile?: string;

    @Field(() => String, {nullable:false})
    clientProfile!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => UserRecipientOnNotificationUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    UserRecipientOnNotification?: UserRecipientOnNotificationUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => UserSenderOnNotificationUncheckedCreateNestedManyWithoutUser_UserSenderOnNotification_notificationToUserInput, {nullable:true})
    UserSenderOnNotification_UserSenderOnNotification_notificationToUser?: UserSenderOnNotificationUncheckedCreateNestedManyWithoutUser_UserSenderOnNotification_notificationToUserInput;

    @Field(() => UserSenderOnNotificationUncheckedCreateNestedManyWithoutUser_UserSenderOnNotification_userToUserInput, {nullable:true})
    UserSenderOnNotification_UserSenderOnNotification_userToUser?: UserSenderOnNotificationUncheckedCreateNestedManyWithoutUser_UserSenderOnNotification_userToUserInput;
}
