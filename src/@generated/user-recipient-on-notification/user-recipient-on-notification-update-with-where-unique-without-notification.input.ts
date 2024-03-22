import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRecipientOnNotificationWhereUniqueInput } from './user-recipient-on-notification-where-unique.input';
import { Type } from 'class-transformer';
import { UserRecipientOnNotificationUpdateWithoutNotificationInput } from './user-recipient-on-notification-update-without-notification.input';

@InputType()
export class UserRecipientOnNotificationUpdateWithWhereUniqueWithoutNotificationInput {

    @Field(() => UserRecipientOnNotificationWhereUniqueInput, {nullable:false})
    @Type(() => UserRecipientOnNotificationWhereUniqueInput)
    where!: Prisma.AtLeast<UserRecipientOnNotificationWhereUniqueInput, 'id'>;

    @Field(() => UserRecipientOnNotificationUpdateWithoutNotificationInput, {nullable:false})
    @Type(() => UserRecipientOnNotificationUpdateWithoutNotificationInput)
    data!: UserRecipientOnNotificationUpdateWithoutNotificationInput;
}
