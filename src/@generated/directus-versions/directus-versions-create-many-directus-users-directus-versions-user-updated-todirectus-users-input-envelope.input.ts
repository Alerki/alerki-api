import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_versionsCreateManyDirectus_users_directus_versions_user_updatedTodirectus_usersInput } from './directus-versions-create-many-directus-users-directus-versions-user-updated-todirectus-users.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_versionsCreateManyDirectus_users_directus_versions_user_updatedTodirectus_usersInputEnvelope {
  @Field(
    () => [
      directus_versionsCreateManyDirectus_users_directus_versions_user_updatedTodirectus_usersInput,
    ],
    { nullable: false },
  )
  @Type(
    () =>
      directus_versionsCreateManyDirectus_users_directus_versions_user_updatedTodirectus_usersInput,
  )
  data!: Array<directus_versionsCreateManyDirectus_users_directus_versions_user_updatedTodirectus_usersInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
