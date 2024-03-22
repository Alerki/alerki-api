import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSenderOnNotificationCreateManyInput } from './user-sender-on-notification-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserSenderOnNotificationArgs {

    @Field(() => [UserSenderOnNotificationCreateManyInput], {nullable:false})
    @Type(() => UserSenderOnNotificationCreateManyInput)
    data!: Array<UserSenderOnNotificationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
