import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSenderOnNotificationWhereInput } from './user-sender-on-notification-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserSenderOnNotificationArgs {

    @Field(() => UserSenderOnNotificationWhereInput, {nullable:true})
    @Type(() => UserSenderOnNotificationWhereInput)
    where?: UserSenderOnNotificationWhereInput;
}
