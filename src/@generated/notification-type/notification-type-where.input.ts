import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { NotificationListRelationFilter } from '../notification/notification-list-relation-filter.input';
import { Directus_usersRelationFilter } from '../prisma/directus-users-relation-filter.input';

@InputType()
export class NotificationTypeWhereInput {
  @Field(() => [NotificationTypeWhereInput], { nullable: true })
  AND?: Array<NotificationTypeWhereInput>;

  @Field(() => [NotificationTypeWhereInput], { nullable: true })
  OR?: Array<NotificationTypeWhereInput>;

  @Field(() => [NotificationTypeWhereInput], { nullable: true })
  NOT?: Array<NotificationTypeWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  user_created?: UuidNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_created?: DateTimeNullableFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  user_updated?: UuidNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_updated?: DateTimeNullableFilter;

  @Field(() => NotificationListRelationFilter, { nullable: true })
  Notification?: NotificationListRelationFilter;

  @Field(() => Directus_usersRelationFilter, { nullable: true })
  directus_users_NotificationType_user_createdTodirectus_users?: Directus_usersRelationFilter;

  @Field(() => Directus_usersRelationFilter, { nullable: true })
  directus_users_NotificationType_user_updatedTodirectus_users?: Directus_usersRelationFilter;
}
