import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_notificationsWhereUniqueInput } from './directus-notifications-where-unique.input';
import { Type } from 'class-transformer';
import { directus_notificationsCreateWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput } from './directus-notifications-create-without-directus-users-directus-notifications-recipient-todirectus-users.input';

@InputType()
export class directus_notificationsCreateOrConnectWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput {
  @Field(() => directus_notificationsWhereUniqueInput, { nullable: false })
  @Type(() => directus_notificationsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_notificationsWhereUniqueInput, 'id'>;

  @Field(
    () =>
      directus_notificationsCreateWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput,
    { nullable: false },
  )
  @Type(
    () =>
      directus_notificationsCreateWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput,
  )
  create!: directus_notificationsCreateWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput;
}
