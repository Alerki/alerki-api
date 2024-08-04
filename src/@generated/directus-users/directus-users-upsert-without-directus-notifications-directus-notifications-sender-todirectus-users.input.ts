import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersUpdateWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput } from './directus-users-update-without-directus-notifications-directus-notifications-sender-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput } from './directus-users-create-without-directus-notifications-directus-notifications-sender-todirectus-users.input';

@InputType()
export class directus_usersUpsertWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput {
  @Field(
    () =>
      directus_usersUpdateWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput,
    { nullable: false },
  )
  @Type(
    () =>
      directus_usersUpdateWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput,
  )
  update!: directus_usersUpdateWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput;

  @Field(
    () =>
      directus_usersCreateWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput,
    { nullable: false },
  )
  @Type(
    () =>
      directus_usersCreateWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput,
  )
  create!: directus_usersCreateWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput;
}
