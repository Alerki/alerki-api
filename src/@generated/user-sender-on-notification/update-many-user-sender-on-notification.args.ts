import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSenderOnNotificationUpdateManyMutationInput } from './user-sender-on-notification-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserSenderOnNotificationWhereInput } from './user-sender-on-notification-where.input';

@ArgsType()
export class UpdateManyUserSenderOnNotificationArgs {

    @Field(() => UserSenderOnNotificationUpdateManyMutationInput, {nullable:false})
    @Type(() => UserSenderOnNotificationUpdateManyMutationInput)
    data!: UserSenderOnNotificationUpdateManyMutationInput;

    @Field(() => UserSenderOnNotificationWhereInput, {nullable:true})
    @Type(() => UserSenderOnNotificationWhereInput)
    where?: UserSenderOnNotificationWhereInput;
}
