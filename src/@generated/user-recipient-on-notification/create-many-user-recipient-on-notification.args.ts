import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecipientOnNotificationCreateManyInput } from './user-recipient-on-notification-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserRecipientOnNotificationArgs {

    @Field(() => [UserRecipientOnNotificationCreateManyInput], {nullable:false})
    @Type(() => UserRecipientOnNotificationCreateManyInput)
    data!: Array<UserRecipientOnNotificationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
