import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput } from './user-create-without-user-sender-on-notification-user-sender-on-notification-notification-to-user.input';

@InputType()
export class UserCreateOrConnectWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber' | 'username'>;

    @Field(() => UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput, {nullable:false})
    @Type(() => UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput)
    create!: UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput;
}
