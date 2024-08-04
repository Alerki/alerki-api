import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationTypeCreateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput } from './notification-type-create-without-directus-users-notification-type-user-updated-todirectus-users.input';
import { Type } from 'class-transformer';
import { NotificationTypeCreateOrConnectWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput } from './notification-type-create-or-connect-without-directus-users-notification-type-user-updated-todirectus-users.input';
import { NotificationTypeCreateManyDirectus_users_NotificationType_user_updatedTodirectus_usersInputEnvelope } from './notification-type-create-many-directus-users-notification-type-user-updated-todirectus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationTypeWhereUniqueInput } from './notification-type-where-unique.input';

@InputType()
export class NotificationTypeUncheckedCreateNestedManyWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput {
  @Field(
    () => [
      NotificationTypeCreateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      NotificationTypeCreateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput,
  )
  create?: Array<NotificationTypeCreateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput>;

  @Field(
    () => [
      NotificationTypeCreateOrConnectWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      NotificationTypeCreateOrConnectWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput,
  )
  connectOrCreate?: Array<NotificationTypeCreateOrConnectWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput>;

  @Field(
    () =>
      NotificationTypeCreateManyDirectus_users_NotificationType_user_updatedTodirectus_usersInputEnvelope,
    { nullable: true },
  )
  @Type(
    () =>
      NotificationTypeCreateManyDirectus_users_NotificationType_user_updatedTodirectus_usersInputEnvelope,
  )
  createMany?: NotificationTypeCreateManyDirectus_users_NotificationType_user_updatedTodirectus_usersInputEnvelope;

  @Field(() => [NotificationTypeWhereUniqueInput], { nullable: true })
  @Type(() => NotificationTypeWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<NotificationTypeWhereUniqueInput, 'id'>>;
}
