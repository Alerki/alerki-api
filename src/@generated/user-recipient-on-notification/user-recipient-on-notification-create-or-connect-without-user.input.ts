import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRecipientOnNotificationWhereUniqueInput } from './user-recipient-on-notification-where-unique.input';
import { Type } from 'class-transformer';
import { UserRecipientOnNotificationCreateWithoutUserInput } from './user-recipient-on-notification-create-without-user.input';

@InputType()
export class UserRecipientOnNotificationCreateOrConnectWithoutUserInput {

    @Field(() => UserRecipientOnNotificationWhereUniqueInput, {nullable:false})
    @Type(() => UserRecipientOnNotificationWhereUniqueInput)
    where!: Prisma.AtLeast<UserRecipientOnNotificationWhereUniqueInput, 'id'>;

    @Field(() => UserRecipientOnNotificationCreateWithoutUserInput, {nullable:false})
    @Type(() => UserRecipientOnNotificationCreateWithoutUserInput)
    create!: UserRecipientOnNotificationCreateWithoutUserInput;
}
