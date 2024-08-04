import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_settingsScalarWhereInput } from './directus-settings-scalar-where.input';
import { Type } from 'class-transformer';
import { directus_settingsUpdateManyMutationInput } from './directus-settings-update-many-mutation.input';

@InputType()
export class directus_settingsUpdateManyWithWhereWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesInput {
  @Field(() => directus_settingsScalarWhereInput, { nullable: false })
  @Type(() => directus_settingsScalarWhereInput)
  where!: directus_settingsScalarWhereInput;

  @Field(() => directus_settingsUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_settingsUpdateManyMutationInput)
  data!: directus_settingsUpdateManyMutationInput;
}
