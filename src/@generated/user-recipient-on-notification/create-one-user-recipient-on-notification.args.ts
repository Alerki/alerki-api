import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecipientOnNotificationCreateInput } from './user-recipient-on-notification-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserRecipientOnNotificationArgs {

    @Field(() => UserRecipientOnNotificationCreateInput, {nullable:false})
    @Type(() => UserRecipientOnNotificationCreateInput)
    data!: UserRecipientOnNotificationCreateInput;
}
