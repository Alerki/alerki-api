import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { ClientProfileRelationFilter } from '../client-profile/client-profile-relation-filter.input';
import { MasterProfileRelationFilter } from '../master-profile/master-profile-relation-filter.input';
import { UserPictureRelationFilter } from '../user-picture/user-picture-relation-filter.input';
import { UserRecipientOnNotificationListRelationFilter } from '../user-recipient-on-notification/user-recipient-on-notification-list-relation-filter.input';
import { UserSenderOnNotificationListRelationFilter } from '../user-sender-on-notification/user-sender-on-notification-list-relation-filter.input';
import { User_SessionListRelationFilter } from '../user-session/user-session-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_created?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_updated?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phoneNumber?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    firstName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastName?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    birthDate?: DateTimeNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    picture?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    masterProfile?: UuidNullableFilter;

    @Field(() => UuidFilter, {nullable:true})
    clientProfile?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => ClientProfileRelationFilter, {nullable:true})
    ClientProfile?: ClientProfileRelationFilter;

    @Field(() => MasterProfileRelationFilter, {nullable:true})
    MasterProfile?: MasterProfileRelationFilter;

    @Field(() => UserPictureRelationFilter, {nullable:true})
    UserPicture?: UserPictureRelationFilter;

    @Field(() => UserRecipientOnNotificationListRelationFilter, {nullable:true})
    UserRecipientOnNotification?: UserRecipientOnNotificationListRelationFilter;

    @Field(() => UserSenderOnNotificationListRelationFilter, {nullable:true})
    UserSenderOnNotification_UserSenderOnNotification_notificationToUser?: UserSenderOnNotificationListRelationFilter;

    @Field(() => UserSenderOnNotificationListRelationFilter, {nullable:true})
    UserSenderOnNotification_UserSenderOnNotification_userToUser?: UserSenderOnNotificationListRelationFilter;

    @Field(() => User_SessionListRelationFilter, {nullable:true})
    User_Session?: User_SessionListRelationFilter;
}
