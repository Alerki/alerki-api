import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { directus_files } from '../directus-files/directus-files.model';
import { directus_folders } from '../directus-folders/directus-folders.model';

@ObjectType()
export class directus_settings {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false, defaultValue: 'Directus' })
  project_name!: string;

  @Field(() => String, { nullable: true })
  project_url!: string | null;

  @Field(() => String, { nullable: false, defaultValue: '#6644FF' })
  project_color!: string;

  @Field(() => String, { nullable: true })
  project_logo!: string | null;

  @Field(() => String, { nullable: true })
  public_foreground!: string | null;

  @Field(() => String, { nullable: true })
  public_background!: string | null;

  @Field(() => String, { nullable: true })
  public_note!: string | null;

  @Field(() => Int, { nullable: true, defaultValue: 25 })
  auth_login_attempts!: number | null;

  @Field(() => String, { nullable: true })
  auth_password_policy!: string | null;

  @Field(() => String, { nullable: true, defaultValue: 'all' })
  storage_asset_transform!: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  storage_asset_presets!: any | null;

  @Field(() => String, { nullable: true })
  custom_css!: string | null;

  @Field(() => String, { nullable: true })
  storage_default_folder!: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  basemaps!: any | null;

  @Field(() => String, { nullable: true })
  mapbox_key!: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  module_bar!: any | null;

  @Field(() => String, { nullable: true })
  project_descriptor!: string | null;

  @Field(() => String, { nullable: false, defaultValue: 'en-US' })
  default_language!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  custom_aspect_ratios!: any | null;

  @Field(() => String, { nullable: true })
  public_favicon!: string | null;

  @Field(() => String, { nullable: false, defaultValue: 'auto' })
  default_appearance!: string;

  @Field(() => String, { nullable: true })
  default_theme_light!: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  theme_light_overrides!: any | null;

  @Field(() => String, { nullable: true })
  default_theme_dark!: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  theme_dark_overrides!: any | null;

  @Field(() => directus_files, { nullable: true })
  directus_files_directus_settings_project_logoTodirectus_files?: directus_files | null;

  @Field(() => directus_files, { nullable: true })
  directus_files_directus_settings_public_backgroundTodirectus_files?: directus_files | null;

  @Field(() => directus_files, { nullable: true })
  directus_files_directus_settings_public_faviconTodirectus_files?: directus_files | null;

  @Field(() => directus_files, { nullable: true })
  directus_files_directus_settings_public_foregroundTodirectus_files?: directus_files | null;

  @Field(() => directus_folders, { nullable: true })
  directus_folders?: directus_folders | null;
}
