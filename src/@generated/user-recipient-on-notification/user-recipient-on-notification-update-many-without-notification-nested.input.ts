import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecipientOnNotificationCreateWithoutNotificationInput } from './user-recipient-on-notification-create-without-notification.input';
import { Type } from 'class-transformer';
import { UserRecipientOnNotificationCreateOrConnectWithoutNotificationInput } from './user-recipient-on-notification-create-or-connect-without-notification.input';
import { UserRecipientOnNotificationUpsertWithWhereUniqueWithoutNotificationInput } from './user-recipient-on-notification-upsert-with-where-unique-without-notification.input';
import { UserRecipientOnNotificationCreateManyNotificationInputEnvelope } from './user-recipient-on-notification-create-many-notification-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserRecipientOnNotificationWhereUniqueInput } from './user-recipient-on-notification-where-unique.input';
import { UserRecipientOnNotificationUpdateWithWhereUniqueWithoutNotificationInput } from './user-recipient-on-notification-update-with-where-unique-without-notification.input';
import { UserRecipientOnNotificationUpdateManyWithWhereWithoutNotificationInput } from './user-recipient-on-notification-update-many-with-where-without-notification.input';
import { UserRecipientOnNotificationScalarWhereInput } from './user-recipient-on-notification-scalar-where.input';

@InputType()
export class UserRecipientOnNotificationUpdateManyWithoutNotificationNestedInput {

    @Field(() => [UserRecipientOnNotificationCreateWithoutNotificationInput], {nullable:true})
    @Type(() => UserRecipientOnNotificationCreateWithoutNotificationInput)
    create?: Array<UserRecipientOnNotificationCreateWithoutNotificationInput>;

    @Field(() => [UserRecipientOnNotificationCreateOrConnectWithoutNotificationInput], {nullable:true})
    @Type(() => UserRecipientOnNotificationCreateOrConnectWithoutNotificationInput)
    connectOrCreate?: Array<UserRecipientOnNotificationCreateOrConnectWithoutNotificationInput>;

    @Field(() => [UserRecipientOnNotificationUpsertWithWhereUniqueWithoutNotificationInput], {nullable:true})
    @Type(() => UserRecipientOnNotificationUpsertWithWhereUniqueWithoutNotificationInput)
    upsert?: Array<UserRecipientOnNotificationUpsertWithWhereUniqueWithoutNotificationInput>;

    @Field(() => UserRecipientOnNotificationCreateManyNotificationInputEnvelope, {nullable:true})
    @Type(() => UserRecipientOnNotificationCreateManyNotificationInputEnvelope)
    createMany?: UserRecipientOnNotificationCreateManyNotificationInputEnvelope;

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

    @Field(() => [UserRecipientOnNotificationUpdateWithWhereUniqueWithoutNotificationInput], {nullable:true})
    @Type(() => UserRecipientOnNotificationUpdateWithWhereUniqueWithoutNotificationInput)
    update?: Array<UserRecipientOnNotificationUpdateWithWhereUniqueWithoutNotificationInput>;

    @Field(() => [UserRecipientOnNotificationUpdateManyWithWhereWithoutNotificationInput], {nullable:true})
    @Type(() => UserRecipientOnNotificationUpdateManyWithWhereWithoutNotificationInput)
    updateMany?: Array<UserRecipientOnNotificationUpdateManyWithWhereWithoutNotificationInput>;

    @Field(() => [UserRecipientOnNotificationScalarWhereInput], {nullable:true})
    @Type(() => UserRecipientOnNotificationScalarWhereInput)
    deleteMany?: Array<UserRecipientOnNotificationScalarWhereInput>;
}
