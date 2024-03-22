import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutUserRecipientOnNotificationInput } from './notification-create-without-user-recipient-on-notification.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutUserRecipientOnNotificationInput } from './notification-create-or-connect-without-user-recipient-on-notification.input';
import { NotificationUpsertWithoutUserRecipientOnNotificationInput } from './notification-upsert-without-user-recipient-on-notification.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { NotificationUpdateWithoutUserRecipientOnNotificationInput } from './notification-update-without-user-recipient-on-notification.input';

@InputType()
export class NotificationUpdateOneRequiredWithoutUserRecipientOnNotificationNestedInput {

    @Field(() => NotificationCreateWithoutUserRecipientOnNotificationInput, {nullable:true})
    @Type(() => NotificationCreateWithoutUserRecipientOnNotificationInput)
    create?: NotificationCreateWithoutUserRecipientOnNotificationInput;

    @Field(() => NotificationCreateOrConnectWithoutUserRecipientOnNotificationInput, {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutUserRecipientOnNotificationInput)
    connectOrCreate?: NotificationCreateOrConnectWithoutUserRecipientOnNotificationInput;

    @Field(() => NotificationUpsertWithoutUserRecipientOnNotificationInput, {nullable:true})
    @Type(() => NotificationUpsertWithoutUserRecipientOnNotificationInput)
    upsert?: NotificationUpsertWithoutUserRecipientOnNotificationInput;

    @Field(() => NotificationWhereUniqueInput, {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationUpdateWithoutUserRecipientOnNotificationInput, {nullable:true})
    @Type(() => NotificationUpdateWithoutUserRecipientOnNotificationInput)
    update?: NotificationUpdateWithoutUserRecipientOnNotificationInput;
}
