import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_versionsCreateWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput } from './directus-versions-create-without-directus-users-directus-versions-user-created-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_versionsCreateOrConnectWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput } from './directus-versions-create-or-connect-without-directus-users-directus-versions-user-created-todirectus-users.input';
import { directus_versionsCreateManyDirectus_users_directus_versions_user_createdTodirectus_usersInputEnvelope } from './directus-versions-create-many-directus-users-directus-versions-user-created-todirectus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_versionsWhereUniqueInput } from './directus-versions-where-unique.input';

@InputType()
export class directus_versionsCreateNestedManyWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput {
  @Field(
    () => [
      directus_versionsCreateWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      directus_versionsCreateWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput,
  )
  create?: Array<directus_versionsCreateWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput>;

  @Field(
    () => [
      directus_versionsCreateOrConnectWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      directus_versionsCreateOrConnectWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput,
  )
  connectOrCreate?: Array<directus_versionsCreateOrConnectWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput>;

  @Field(
    () =>
      directus_versionsCreateManyDirectus_users_directus_versions_user_createdTodirectus_usersInputEnvelope,
    { nullable: true },
  )
  @Type(
    () =>
      directus_versionsCreateManyDirectus_users_directus_versions_user_createdTodirectus_usersInputEnvelope,
  )
  createMany?: directus_versionsCreateManyDirectus_users_directus_versions_user_createdTodirectus_usersInputEnvelope;

  @Field(() => [directus_versionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_versionsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_versionsWhereUniqueInput, 'id'>>;
}
