import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSenderOnNotificationUpdateInput } from './user-sender-on-notification-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserSenderOnNotificationWhereUniqueInput } from './user-sender-on-notification-where-unique.input';

@ArgsType()
export class UpdateOneUserSenderOnNotificationArgs {

    @Field(() => UserSenderOnNotificationUpdateInput, {nullable:false})
    @Type(() => UserSenderOnNotificationUpdateInput)
    data!: UserSenderOnNotificationUpdateInput;

    @Field(() => UserSenderOnNotificationWhereUniqueInput, {nullable:false})
    @Type(() => UserSenderOnNotificationWhereUniqueInput)
    where!: Prisma.AtLeast<UserSenderOnNotificationWhereUniqueInput, 'id'>;
}
