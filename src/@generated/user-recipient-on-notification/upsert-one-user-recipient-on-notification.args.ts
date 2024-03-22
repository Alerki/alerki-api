import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRecipientOnNotificationWhereUniqueInput } from './user-recipient-on-notification-where-unique.input';
import { Type } from 'class-transformer';
import { UserRecipientOnNotificationCreateInput } from './user-recipient-on-notification-create.input';
import { UserRecipientOnNotificationUpdateInput } from './user-recipient-on-notification-update.input';

@ArgsType()
export class UpsertOneUserRecipientOnNotificationArgs {

    @Field(() => UserRecipientOnNotificationWhereUniqueInput, {nullable:false})
    @Type(() => UserRecipientOnNotificationWhereUniqueInput)
    where!: Prisma.AtLeast<UserRecipientOnNotificationWhereUniqueInput, 'id'>;

    @Field(() => UserRecipientOnNotificationCreateInput, {nullable:false})
    @Type(() => UserRecipientOnNotificationCreateInput)
    create!: UserRecipientOnNotificationCreateInput;

    @Field(() => UserRecipientOnNotificationUpdateInput, {nullable:false})
    @Type(() => UserRecipientOnNotificationUpdateInput)
    update!: UserRecipientOnNotificationUpdateInput;
}
