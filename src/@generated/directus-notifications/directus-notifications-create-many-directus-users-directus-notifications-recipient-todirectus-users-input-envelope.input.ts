import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_notificationsCreateManyDirectus_users_directus_notifications_recipientTodirectus_usersInput } from './directus-notifications-create-many-directus-users-directus-notifications-recipient-todirectus-users.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_notificationsCreateManyDirectus_users_directus_notifications_recipientTodirectus_usersInputEnvelope {
  @Field(
    () => [
      directus_notificationsCreateManyDirectus_users_directus_notifications_recipientTodirectus_usersInput,
    ],
    { nullable: false },
  )
  @Type(
    () =>
      directus_notificationsCreateManyDirectus_users_directus_notifications_recipientTodirectus_usersInput,
  )
  data!: Array<directus_notificationsCreateManyDirectus_users_directus_notifications_recipientTodirectus_usersInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
