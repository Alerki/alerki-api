import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationTypeWhereUniqueInput } from './notification-type-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationTypeCreateWithoutDirectus_users_NotificationType_user_createdTodirectus_usersInput } from './notification-type-create-without-directus-users-notification-type-user-created-todirectus-users.input';

@InputType()
export class NotificationTypeCreateOrConnectWithoutDirectus_users_NotificationType_user_createdTodirectus_usersInput {
  @Field(() => NotificationTypeWhereUniqueInput, { nullable: false })
  @Type(() => NotificationTypeWhereUniqueInput)
  where!: Prisma.AtLeast<NotificationTypeWhereUniqueInput, 'id'>;

  @Field(
    () =>
      NotificationTypeCreateWithoutDirectus_users_NotificationType_user_createdTodirectus_usersInput,
    { nullable: false },
  )
  @Type(
    () =>
      NotificationTypeCreateWithoutDirectus_users_NotificationType_user_createdTodirectus_usersInput,
  )
  create!: NotificationTypeCreateWithoutDirectus_users_NotificationType_user_createdTodirectus_usersInput;
}
