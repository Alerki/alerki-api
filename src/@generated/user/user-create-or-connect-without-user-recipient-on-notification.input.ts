import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserRecipientOnNotificationInput } from './user-create-without-user-recipient-on-notification.input';

@InputType()
export class UserCreateOrConnectWithoutUserRecipientOnNotificationInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber' | 'username'>;

    @Field(() => UserCreateWithoutUserRecipientOnNotificationInput, {nullable:false})
    @Type(() => UserCreateWithoutUserRecipientOnNotificationInput)
    create!: UserCreateWithoutUserRecipientOnNotificationInput;
}
