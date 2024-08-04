import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsCreateNestedManyWithoutDirectus_versionsInput } from '../directus-revisions/directus-revisions-create-nested-many-without-directus-versions.input';
import { directus_usersCreateNestedOneWithoutDirectus_versions_directus_versions_user_createdTodirectus_usersInput } from '../directus-users/directus-users-create-nested-one-without-directus-versions-directus-versions-user-created-todirectus-users.input';
import { directus_usersCreateNestedOneWithoutDirectus_versions_directus_versions_user_updatedTodirectus_usersInput } from '../directus-users/directus-users-create-nested-one-without-directus-versions-directus-versions-user-updated-todirectus-users.input';

@InputType()
export class directus_versionsCreateWithoutDirectus_collectionsInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  key!: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: false })
  item!: string;

  @Field(() => String, { nullable: true })
  hash?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(
    () => directus_revisionsCreateNestedManyWithoutDirectus_versionsInput,
    { nullable: true },
  )
  directus_revisions?: directus_revisionsCreateNestedManyWithoutDirectus_versionsInput;

  @Field(
    () =>
      directus_usersCreateNestedOneWithoutDirectus_versions_directus_versions_user_createdTodirectus_usersInput,
    { nullable: true },
  )
  directus_users_directus_versions_user_createdTodirectus_users?: directus_usersCreateNestedOneWithoutDirectus_versions_directus_versions_user_createdTodirectus_usersInput;

  @Field(
    () =>
      directus_usersCreateNestedOneWithoutDirectus_versions_directus_versions_user_updatedTodirectus_usersInput,
    { nullable: true },
  )
  directus_users_directus_versions_user_updatedTodirectus_users?: directus_usersCreateNestedOneWithoutDirectus_versions_directus_versions_user_updatedTodirectus_usersInput;
}
