import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_settingsCreateWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesInput } from './directus-settings-create-without-directus-files-directus-settings-public-favicon-todirectus-files.input';
import { Type } from 'class-transformer';
import { directus_settingsCreateOrConnectWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesInput } from './directus-settings-create-or-connect-without-directus-files-directus-settings-public-favicon-todirectus-files.input';
import { directus_settingsCreateManyDirectus_files_directus_settings_public_faviconTodirectus_filesInputEnvelope } from './directus-settings-create-many-directus-files-directus-settings-public-favicon-todirectus-files-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_settingsWhereUniqueInput } from './directus-settings-where-unique.input';

@InputType()
export class directus_settingsCreateNestedManyWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesInput {
  @Field(
    () => [
      directus_settingsCreateWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      directus_settingsCreateWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesInput,
  )
  create?: Array<directus_settingsCreateWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesInput>;

  @Field(
    () => [
      directus_settingsCreateOrConnectWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      directus_settingsCreateOrConnectWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesInput,
  )
  connectOrCreate?: Array<directus_settingsCreateOrConnectWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesInput>;

  @Field(
    () =>
      directus_settingsCreateManyDirectus_files_directus_settings_public_faviconTodirectus_filesInputEnvelope,
    { nullable: true },
  )
  @Type(
    () =>
      directus_settingsCreateManyDirectus_files_directus_settings_public_faviconTodirectus_filesInputEnvelope,
  )
  createMany?: directus_settingsCreateManyDirectus_files_directus_settings_public_faviconTodirectus_filesInputEnvelope;

  @Field(() => [directus_settingsWhereUniqueInput], { nullable: true })
  @Type(() => directus_settingsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_settingsWhereUniqueInput, 'id'>>;
}
