import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Notification } from '../notification/notification.model';
import { directus_users } from '../directus-users/directus-users.model';
import { NotificationTypeCount } from './notification-type-count.output';

@ObjectType()
export class NotificationType {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  user_created!: string | null;

  @Field(() => Date, { nullable: true })
  date_created!: Date | null;

  @Field(() => String, { nullable: true })
  user_updated!: string | null;

  @Field(() => Date, { nullable: true })
  date_updated!: Date | null;

  @Field(() => [Notification], { nullable: true })
  Notification?: Array<Notification>;

  @Field(() => directus_users, { nullable: true })
  directus_users_NotificationType_user_createdTodirectus_users?: directus_users | null;

  @Field(() => directus_users, { nullable: true })
  directus_users_NotificationType_user_updatedTodirectus_users?: directus_users | null;

  @Field(() => NotificationTypeCount, { nullable: false })
  _count?: NotificationTypeCount;
}
