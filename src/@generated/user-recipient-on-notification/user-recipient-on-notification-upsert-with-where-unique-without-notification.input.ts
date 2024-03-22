import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRecipientOnNotificationWhereUniqueInput } from './user-recipient-on-notification-where-unique.input';
import { Type } from 'class-transformer';
import { UserRecipientOnNotificationUpdateWithoutNotificationInput } from './user-recipient-on-notification-update-without-notification.input';
import { UserRecipientOnNotificationCreateWithoutNotificationInput } from './user-recipient-on-notification-create-without-notification.input';

@InputType()
export class UserRecipientOnNotificationUpsertWithWhereUniqueWithoutNotificationInput {

    @Field(() => UserRecipientOnNotificationWhereUniqueInput, {nullable:false})
    @Type(() => UserRecipientOnNotificationWhereUniqueInput)
    where!: Prisma.AtLeast<UserRecipientOnNotificationWhereUniqueInput, 'id'>;

    @Field(() => UserRecipientOnNotificationUpdateWithoutNotificationInput, {nullable:false})
    @Type(() => UserRecipientOnNotificationUpdateWithoutNotificationInput)
    update!: UserRecipientOnNotificationUpdateWithoutNotificationInput;

    @Field(() => UserRecipientOnNotificationCreateWithoutNotificationInput, {nullable:false})
    @Type(() => UserRecipientOnNotificationCreateWithoutNotificationInput)
    create!: UserRecipientOnNotificationCreateWithoutNotificationInput;
}
