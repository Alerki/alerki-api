import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecipientOnNotificationWhereInput } from './user-recipient-on-notification-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserRecipientOnNotificationArgs {

    @Field(() => UserRecipientOnNotificationWhereInput, {nullable:true})
    @Type(() => UserRecipientOnNotificationWhereInput)
    where?: UserRecipientOnNotificationWhereInput;
}
