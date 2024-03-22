import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientProfileCreateNestedOneWithoutUserInput } from '../client-profile/client-profile-create-nested-one-without-user.input';
import { MasterProfileCreateNestedOneWithoutUserInput } from '../master-profile/master-profile-create-nested-one-without-user.input';
import { UserPictureCreateNestedOneWithoutUserInput } from '../user-picture/user-picture-create-nested-one-without-user.input';
import { UserRecipientOnNotificationCreateNestedManyWithoutUserInput } from '../user-recipient-on-notification/user-recipient-on-notification-create-nested-many-without-user.input';
import { UserSenderOnNotificationCreateNestedManyWithoutUser_UserSenderOnNotification_notificationToUserInput } from '../user-sender-on-notification/user-sender-on-notification-create-nested-many-without-user-user-sender-on-notification-notification-to-user.input';
import { UserSenderOnNotificationCreateNestedManyWithoutUser_UserSenderOnNotification_userToUserInput } from '../user-sender-on-notification/user-sender-on-notification-create-nested-many-without-user-user-sender-on-notification-user-to-user.input';

@InputType()
export class UserCreateWithoutUser_SessionInput {

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

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => ClientProfileCreateNestedOneWithoutUserInput, {nullable:false})
    ClientProfile!: ClientProfileCreateNestedOneWithoutUserInput;

    @Field(() => MasterProfileCreateNestedOneWithoutUserInput, {nullable:true})
    MasterProfile?: MasterProfileCreateNestedOneWithoutUserInput;

    @Field(() => UserPictureCreateNestedOneWithoutUserInput, {nullable:true})
    UserPicture?: UserPictureCreateNestedOneWithoutUserInput;

    @Field(() => UserRecipientOnNotificationCreateNestedManyWithoutUserInput, {nullable:true})
    UserRecipientOnNotification?: UserRecipientOnNotificationCreateNestedManyWithoutUserInput;

    @Field(() => UserSenderOnNotificationCreateNestedManyWithoutUser_UserSenderOnNotification_notificationToUserInput, {nullable:true})
    UserSenderOnNotification_UserSenderOnNotification_notificationToUser?: UserSenderOnNotificationCreateNestedManyWithoutUser_UserSenderOnNotification_notificationToUserInput;

    @Field(() => UserSenderOnNotificationCreateNestedManyWithoutUser_UserSenderOnNotification_userToUserInput, {nullable:true})
    UserSenderOnNotification_UserSenderOnNotification_userToUser?: UserSenderOnNotificationCreateNestedManyWithoutUser_UserSenderOnNotification_userToUserInput;
}
