import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class UserSenderOnNotificationWhereInput {
  @Field(() => [UserSenderOnNotificationWhereInput], { nullable: true })
  AND?: Array<UserSenderOnNotificationWhereInput>;

  @Field(() => [UserSenderOnNotificationWhereInput], { nullable: true })
  OR?: Array<UserSenderOnNotificationWhereInput>;

  @Field(() => [UserSenderOnNotificationWhereInput], { nullable: true })
  NOT?: Array<UserSenderOnNotificationWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_created?: DateTimeNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_updated?: DateTimeNullableFilter;

  @Field(() => UuidFilter, { nullable: true })
  user?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  notification?: UuidFilter;

  @Field(() => UserRelationFilter, { nullable: true })
  User_UserSenderOnNotification_notificationToUser?: UserRelationFilter;

  @Field(() => UserRelationFilter, { nullable: true })
  User_UserSenderOnNotification_userToUser?: UserRelationFilter;
}
