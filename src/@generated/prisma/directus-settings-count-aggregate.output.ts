import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_settingsCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  project_name!: number;

  @Field(() => Int, { nullable: false })
  project_url!: number;

  @Field(() => Int, { nullable: false })
  project_color!: number;

  @Field(() => Int, { nullable: false })
  project_logo!: number;

  @Field(() => Int, { nullable: false })
  public_foreground!: number;

  @Field(() => Int, { nullable: false })
  public_background!: number;

  @Field(() => Int, { nullable: false })
  public_note!: number;

  @Field(() => Int, { nullable: false })
  auth_login_attempts!: number;

  @Field(() => Int, { nullable: false })
  auth_password_policy!: number;

  @Field(() => Int, { nullable: false })
  storage_asset_transform!: number;

  @Field(() => Int, { nullable: false })
  storage_asset_presets!: number;

  @Field(() => Int, { nullable: false })
  custom_css!: number;

  @Field(() => Int, { nullable: false })
  storage_default_folder!: number;

  @Field(() => Int, { nullable: false })
  basemaps!: number;

  @Field(() => Int, { nullable: false })
  mapbox_key!: number;

  @Field(() => Int, { nullable: false })
  module_bar!: number;

  @Field(() => Int, { nullable: false })
  project_descriptor!: number;

  @Field(() => Int, { nullable: false })
  default_language!: number;

  @Field(() => Int, { nullable: false })
  custom_aspect_ratios!: number;

  @Field(() => Int, { nullable: false })
  public_favicon!: number;

  @Field(() => Int, { nullable: false })
  default_appearance!: number;

  @Field(() => Int, { nullable: false })
  default_theme_light!: number;

  @Field(() => Int, { nullable: false })
  theme_light_overrides!: number;

  @Field(() => Int, { nullable: false })
  default_theme_dark!: number;

  @Field(() => Int, { nullable: false })
  theme_dark_overrides!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
