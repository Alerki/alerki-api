import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { NotificationRelationFilter } from '../notification/notification-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class UserRecipientOnNotificationWhereInput {

    @Field(() => [UserRecipientOnNotificationWhereInput], {nullable:true})
    AND?: Array<UserRecipientOnNotificationWhereInput>;

    @Field(() => [UserRecipientOnNotificationWhereInput], {nullable:true})
    OR?: Array<UserRecipientOnNotificationWhereInput>;

    @Field(() => [UserRecipientOnNotificationWhereInput], {nullable:true})
    NOT?: Array<UserRecipientOnNotificationWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_created?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_updated?: DateTimeNullableFilter;

    @Field(() => UuidFilter, {nullable:true})
    user?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    notification?: UuidFilter;

    @Field(() => NotificationRelationFilter, {nullable:true})
    Notification?: NotificationRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;
}
