import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecipientOnNotificationUpdateInput } from './user-recipient-on-notification-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserRecipientOnNotificationWhereUniqueInput } from './user-recipient-on-notification-where-unique.input';

@ArgsType()
export class UpdateOneUserRecipientOnNotificationArgs {

    @Field(() => UserRecipientOnNotificationUpdateInput, {nullable:false})
    @Type(() => UserRecipientOnNotificationUpdateInput)
    data!: UserRecipientOnNotificationUpdateInput;

    @Field(() => UserRecipientOnNotificationWhereUniqueInput, {nullable:false})
    @Type(() => UserRecipientOnNotificationWhereUniqueInput)
    where!: Prisma.AtLeast<UserRecipientOnNotificationWhereUniqueInput, 'id'>;
}
