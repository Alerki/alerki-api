import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecipientOnNotificationCreateWithoutUserInput } from './user-recipient-on-notification-create-without-user.input';
import { Type } from 'class-transformer';
import { UserRecipientOnNotificationCreateOrConnectWithoutUserInput } from './user-recipient-on-notification-create-or-connect-without-user.input';
import { UserRecipientOnNotificationUpsertWithWhereUniqueWithoutUserInput } from './user-recipient-on-notification-upsert-with-where-unique-without-user.input';
import { UserRecipientOnNotificationCreateManyUserInputEnvelope } from './user-recipient-on-notification-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserRecipientOnNotificationWhereUniqueInput } from './user-recipient-on-notification-where-unique.input';
import { UserRecipientOnNotificationUpdateWithWhereUniqueWithoutUserInput } from './user-recipient-on-notification-update-with-where-unique-without-user.input';
import { UserRecipientOnNotificationUpdateManyWithWhereWithoutUserInput } from './user-recipient-on-notification-update-many-with-where-without-user.input';
import { UserRecipientOnNotificationScalarWhereInput } from './user-recipient-on-notification-scalar-where.input';

@InputType()
export class UserRecipientOnNotificationUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [UserRecipientOnNotificationCreateWithoutUserInput], {nullable:true})
    @Type(() => UserRecipientOnNotificationCreateWithoutUserInput)
    create?: Array<UserRecipientOnNotificationCreateWithoutUserInput>;

    @Field(() => [UserRecipientOnNotificationCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserRecipientOnNotificationCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserRecipientOnNotificationCreateOrConnectWithoutUserInput>;

    @Field(() => [UserRecipientOnNotificationUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserRecipientOnNotificationUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserRecipientOnNotificationUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserRecipientOnNotificationCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserRecipientOnNotificationCreateManyUserInputEnvelope)
    createMany?: UserRecipientOnNotificationCreateManyUserInputEnvelope;

    @Field(() => [UserRecipientOnNotificationWhereUniqueInput], {nullable:true})
    @Type(() => UserRecipientOnNotificationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserRecipientOnNotificationWhereUniqueInput, 'id'>>;

    @Field(() => [UserRecipientOnNotificationWhereUniqueInput], {nullable:true})
    @Type(() => UserRecipientOnNotificationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserRecipientOnNotificationWhereUniqueInput, 'id'>>;

    @Field(() => [UserRecipientOnNotificationWhereUniqueInput], {nullable:true})
    @Type(() => UserRecipientOnNotificationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserRecipientOnNotificationWhereUniqueInput, 'id'>>;

    @Field(() => [UserRecipientOnNotificationWhereUniqueInput], {nullable:true})
    @Type(() => UserRecipientOnNotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserRecipientOnNotificationWhereUniqueInput, 'id'>>;

    @Field(() => [UserRecipientOnNotificationUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserRecipientOnNotificationUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserRecipientOnNotificationUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserRecipientOnNotificationUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserRecipientOnNotificationUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserRecipientOnNotificationUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserRecipientOnNotificationScalarWhereInput], {nullable:true})
    @Type(() => UserRecipientOnNotificationScalarWhereInput)
    deleteMany?: Array<UserRecipientOnNotificationScalarWhereInput>;
}
