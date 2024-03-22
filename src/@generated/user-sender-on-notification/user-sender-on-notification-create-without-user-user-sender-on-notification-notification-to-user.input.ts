import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput } from '../user/user-create-nested-one-without-user-sender-on-notification-user-sender-on-notification-user-to-user.input';

@InputType()
export class UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_notificationToUserInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => UserCreateNestedOneWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput, {nullable:false})
    User_UserSenderOnNotification_userToUser!: UserCreateNestedOneWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput;
}
