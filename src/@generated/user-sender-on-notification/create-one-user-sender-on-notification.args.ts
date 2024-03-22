import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSenderOnNotificationCreateInput } from './user-sender-on-notification-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserSenderOnNotificationArgs {

    @Field(() => UserSenderOnNotificationCreateInput, {nullable:false})
    @Type(() => UserSenderOnNotificationCreateInput)
    data!: UserSenderOnNotificationCreateInput;
}
