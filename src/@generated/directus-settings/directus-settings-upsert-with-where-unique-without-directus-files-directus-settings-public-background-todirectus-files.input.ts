import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_settingsWhereUniqueInput } from './directus-settings-where-unique.input';
import { Type } from 'class-transformer';
import { directus_settingsUpdateWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput } from './directus-settings-update-without-directus-files-directus-settings-public-background-todirectus-files.input';
import { directus_settingsCreateWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput } from './directus-settings-create-without-directus-files-directus-settings-public-background-todirectus-files.input';

@InputType()
export class directus_settingsUpsertWithWhereUniqueWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput {
  @Field(() => directus_settingsWhereUniqueInput, { nullable: false })
  @Type(() => directus_settingsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_settingsWhereUniqueInput, 'id'>;

  @Field(
    () =>
      directus_settingsUpdateWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput,
    { nullable: false },
  )
  @Type(
    () =>
      directus_settingsUpdateWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput,
  )
  update!: directus_settingsUpdateWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput;

  @Field(
    () =>
      directus_settingsCreateWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput,
    { nullable: false },
  )
  @Type(
    () =>
      directus_settingsCreateWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput,
  )
  create!: directus_settingsCreateWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput;
}
