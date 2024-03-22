import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    UserRecipientOnNotification?: number;

    @Field(() => Int, {nullable:false})
    UserSenderOnNotification_UserSenderOnNotification_notificationToUser?: number;

    @Field(() => Int, {nullable:false})
    UserSenderOnNotification_UserSenderOnNotification_userToUser?: number;

    @Field(() => Int, {nullable:false})
    User_Session?: number;
}
