import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersUpdateWithoutDirectus_settingsInput } from './directus-folders-update-without-directus-settings.input';
import { Type } from 'class-transformer';
import { directus_foldersCreateWithoutDirectus_settingsInput } from './directus-folders-create-without-directus-settings.input';

@InputType()
export class directus_foldersUpsertWithoutDirectus_settingsInput {
  @Field(() => directus_foldersUpdateWithoutDirectus_settingsInput, {
    nullable: false,
  })
  @Type(() => directus_foldersUpdateWithoutDirectus_settingsInput)
  update!: directus_foldersUpdateWithoutDirectus_settingsInput;

  @Field(() => directus_foldersCreateWithoutDirectus_settingsInput, {
    nullable: false,
  })
  @Type(() => directus_foldersCreateWithoutDirectus_settingsInput)
  create!: directus_foldersCreateWithoutDirectus_settingsInput;
}
