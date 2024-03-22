import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserSenderOnNotificationWhereUniqueInput } from './user-sender-on-notification-where-unique.input';
import { Type } from 'class-transformer';
import { UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_userToUserInput } from './user-sender-on-notification-create-without-user-user-sender-on-notification-user-to-user.input';

@InputType()
export class UserSenderOnNotificationCreateOrConnectWithoutUser_UserSenderOnNotification_userToUserInput {

    @Field(() => UserSenderOnNotificationWhereUniqueInput, {nullable:false})
    @Type(() => UserSenderOnNotificationWhereUniqueInput)
    where!: Prisma.AtLeast<UserSenderOnNotificationWhereUniqueInput, 'id'>;

    @Field(() => UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_userToUserInput, {nullable:false})
    @Type(() => UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_userToUserInput)
    create!: UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_userToUserInput;
}
