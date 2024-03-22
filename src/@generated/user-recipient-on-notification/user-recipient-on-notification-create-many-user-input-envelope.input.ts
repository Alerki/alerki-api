import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecipientOnNotificationCreateManyUserInput } from './user-recipient-on-notification-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserRecipientOnNotificationCreateManyUserInputEnvelope {

    @Field(() => [UserRecipientOnNotificationCreateManyUserInput], {nullable:false})
    @Type(() => UserRecipientOnNotificationCreateManyUserInput)
    data!: Array<UserRecipientOnNotificationCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
