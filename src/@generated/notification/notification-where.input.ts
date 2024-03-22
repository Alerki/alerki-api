import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRecipientOnNotificationListRelationFilter } from '../user-recipient-on-notification/user-recipient-on-notification-list-relation-filter.input';

@InputType()
export class NotificationWhereInput {

    @Field(() => [NotificationWhereInput], {nullable:true})
    AND?: Array<NotificationWhereInput>;

    @Field(() => [NotificationWhereInput], {nullable:true})
    OR?: Array<NotificationWhereInput>;

    @Field(() => [NotificationWhereInput], {nullable:true})
    NOT?: Array<NotificationWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_created?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_updated?: DateTimeNullableFilter;

    @Field(() => UserRecipientOnNotificationListRelationFilter, {nullable:true})
    UserRecipientOnNotification?: UserRecipientOnNotificationListRelationFilter;
}
