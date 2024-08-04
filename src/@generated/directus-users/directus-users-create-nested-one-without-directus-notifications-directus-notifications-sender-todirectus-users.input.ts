import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput } from './directus-users-create-without-directus-notifications-directus-notifications-sender-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput } from './directus-users-create-or-connect-without-directus-notifications-directus-notifications-sender-todirectus-users.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';

@InputType()
export class directus_usersCreateNestedOneWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput {
  @Field(
    () =>
      directus_usersCreateWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersCreateWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput,
  )
  create?: directus_usersCreateWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput;

  @Field(
    () =>
      directus_usersCreateOrConnectWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersCreateOrConnectWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput,
  )
  connectOrCreate?: directus_usersCreateOrConnectWithoutDirectus_notifications_directus_notifications_senderTodirectus_usersInput;

  @Field(() => directus_usersWhereUniqueInput, { nullable: true })
  @Type(() => directus_usersWhereUniqueInput)
  connect?: Prisma.AtLeast<
    directus_usersWhereUniqueInput,
    'id' | 'email' | 'token' | 'external_identifier'
  >;
}
