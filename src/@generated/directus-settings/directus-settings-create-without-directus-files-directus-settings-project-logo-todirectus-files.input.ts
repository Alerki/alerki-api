import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { directus_filesCreateNestedOneWithoutDirectus_settings_directus_settings_public_backgroundTodirectus_filesInput } from '../directus-files/directus-files-create-nested-one-without-directus-settings-directus-settings-public-background-todirectus-files.input';
import { directus_filesCreateNestedOneWithoutDirectus_settings_directus_settings_public_faviconTodirectus_filesInput } from '../directus-files/directus-files-create-nested-one-without-directus-settings-directus-settings-public-favicon-todirectus-files.input';
import { directus_filesCreateNestedOneWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput } from '../directus-files/directus-files-create-nested-one-without-directus-settings-directus-settings-public-foreground-todirectus-files.input';
import { directus_foldersCreateNestedOneWithoutDirectus_settingsInput } from '../directus-folders/directus-folders-create-nested-one-without-directus-settings.input';

@InputType()
export class directus_settingsCreateWithoutDirectus_files_directus_settings_project_logoTodirectus_filesInput {
  @Field(() => String, { nullable: true })
  project_name?: string;

  @Field(() => String, { nullable: true })
  project_url?: string;

  @Field(() => String, { nullable: true })
  project_color?: string;

  @Field(() => String, { nullable: true })
  public_note?: string;

  @Field(() => Int, { nullable: true })
  auth_login_attempts?: number;

  @Field(() => String, { nullable: true })
  auth_password_policy?: string;

  @Field(() => String, { nullable: true })
  storage_asset_transform?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  storage_asset_presets?: any;

  @Field(() => String, { nullable: true })
  custom_css?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  basemaps?: any;

  @Field(() => String, { nullable: true })
  mapbox_key?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  module_bar?: any;

  @Field(() => String, { nullable: true })
  project_descriptor?: string;

  @Field(() => String, { nullable: true })
  default_language?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  custom_aspect_ratios?: any;

  @Field(() => String, { nullable: true })
  default_appearance?: string;

  @Field(() => String, { nullable: true })
  default_theme_light?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  theme_light_overrides?: any;

  @Field(() => String, { nullable: true })
  default_theme_dark?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  theme_dark_overrides?: any;

  @Field(
    () =>
      directus_filesCreateNestedOneWithoutDirectus_settings_directus_settings_public_backgroundTodirectus_filesInput,
    { nullable: true },
  )
  directus_files_directus_settings_public_backgroundTodirectus_files?: directus_filesCreateNestedOneWithoutDirectus_settings_directus_settings_public_backgroundTodirectus_filesInput;

  @Field(
    () =>
      directus_filesCreateNestedOneWithoutDirectus_settings_directus_settings_public_faviconTodirectus_filesInput,
    { nullable: true },
  )
  directus_files_directus_settings_public_faviconTodirectus_files?: directus_filesCreateNestedOneWithoutDirectus_settings_directus_settings_public_faviconTodirectus_filesInput;

  @Field(
    () =>
      directus_filesCreateNestedOneWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput,
    { nullable: true },
  )
  directus_files_directus_settings_public_foregroundTodirectus_files?: directus_filesCreateNestedOneWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput;

  @Field(() => directus_foldersCreateNestedOneWithoutDirectus_settingsInput, {
    nullable: true,
  })
  directus_folders?: directus_foldersCreateNestedOneWithoutDirectus_settingsInput;
}
