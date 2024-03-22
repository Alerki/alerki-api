import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserSenderOnNotificationWhereUniqueInput } from './user-sender-on-notification-where-unique.input';
import { Type } from 'class-transformer';
import { UserSenderOnNotificationUpdateWithoutUser_UserSenderOnNotification_notificationToUserInput } from './user-sender-on-notification-update-without-user-user-sender-on-notification-notification-to-user.input';
import { UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_notificationToUserInput } from './user-sender-on-notification-create-without-user-user-sender-on-notification-notification-to-user.input';

@InputType()
export class UserSenderOnNotificationUpsertWithWhereUniqueWithoutUser_UserSenderOnNotification_notificationToUserInput {

    @Field(() => UserSenderOnNotificationWhereUniqueInput, {nullable:false})
    @Type(() => UserSenderOnNotificationWhereUniqueInput)
    where!: Prisma.AtLeast<UserSenderOnNotificationWhereUniqueInput, 'id'>;

    @Field(() => UserSenderOnNotificationUpdateWithoutUser_UserSenderOnNotification_notificationToUserInput, {nullable:false})
    @Type(() => UserSenderOnNotificationUpdateWithoutUser_UserSenderOnNotification_notificationToUserInput)
    update!: UserSenderOnNotificationUpdateWithoutUser_UserSenderOnNotification_notificationToUserInput;

    @Field(() => UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_notificationToUserInput, {nullable:false})
    @Type(() => UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_notificationToUserInput)
    create!: UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_notificationToUserInput;
}
