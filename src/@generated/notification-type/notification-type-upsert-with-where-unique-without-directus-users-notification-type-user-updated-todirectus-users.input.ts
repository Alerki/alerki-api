import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationTypeWhereUniqueInput } from './notification-type-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationTypeUpdateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput } from './notification-type-update-without-directus-users-notification-type-user-updated-todirectus-users.input';
import { NotificationTypeCreateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput } from './notification-type-create-without-directus-users-notification-type-user-updated-todirectus-users.input';

@InputType()
export class NotificationTypeUpsertWithWhereUniqueWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput {
  @Field(() => NotificationTypeWhereUniqueInput, { nullable: false })
  @Type(() => NotificationTypeWhereUniqueInput)
  where!: Prisma.AtLeast<NotificationTypeWhereUniqueInput, 'id'>;

  @Field(
    () =>
      NotificationTypeUpdateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput,
    { nullable: false },
  )
  @Type(
    () =>
      NotificationTypeUpdateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput,
  )
  update!: NotificationTypeUpdateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput;

  @Field(
    () =>
      NotificationTypeCreateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput,
    { nullable: false },
  )
  @Type(
    () =>
      NotificationTypeCreateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput,
  )
  create!: NotificationTypeCreateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput;
}
