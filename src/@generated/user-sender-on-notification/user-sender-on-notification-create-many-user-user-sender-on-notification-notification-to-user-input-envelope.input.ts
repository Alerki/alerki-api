import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_notificationToUserInput } from './user-sender-on-notification-create-many-user-user-sender-on-notification-notification-to-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_notificationToUserInputEnvelope {

    @Field(() => [UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_notificationToUserInput], {nullable:false})
    @Type(() => UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_notificationToUserInput)
    data!: Array<UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_notificationToUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
