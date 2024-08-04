import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput } from './directus-users-create-without-directus-notifications-directus-notifications-recipient-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput } from './directus-users-create-or-connect-without-directus-notifications-directus-notifications-recipient-todirectus-users.input';
import { directus_usersUpsertWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput } from './directus-users-upsert-without-directus-notifications-directus-notifications-recipient-todirectus-users.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';
import { directus_usersUpdateWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput } from './directus-users-update-without-directus-notifications-directus-notifications-recipient-todirectus-users.input';

@InputType()
export class directus_usersUpdateOneRequiredWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersNestedInput {
  @Field(
    () =>
      directus_usersCreateWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersCreateWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput,
  )
  create?: directus_usersCreateWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput;

  @Field(
    () =>
      directus_usersCreateOrConnectWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersCreateOrConnectWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput,
  )
  connectOrCreate?: directus_usersCreateOrConnectWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput;

  @Field(
    () =>
      directus_usersUpsertWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersUpsertWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput,
  )
  upsert?: directus_usersUpsertWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput;

  @Field(() => directus_usersWhereUniqueInput, { nullable: true })
  @Type(() => directus_usersWhereUniqueInput)
  connect?: Prisma.AtLeast<
    directus_usersWhereUniqueInput,
    'id' | 'email' | 'token' | 'external_identifier'
  >;

  @Field(
    () =>
      directus_usersUpdateWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersUpdateWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput,
  )
  update?: directus_usersUpdateWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput;
}
