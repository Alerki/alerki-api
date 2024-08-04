import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Directus_settingsCountAggregate } from './directus-settings-count-aggregate.output';
import { Directus_settingsAvgAggregate } from './directus-settings-avg-aggregate.output';
import { Directus_settingsSumAggregate } from './directus-settings-sum-aggregate.output';
import { Directus_settingsMinAggregate } from './directus-settings-min-aggregate.output';
import { Directus_settingsMaxAggregate } from './directus-settings-max-aggregate.output';

@ObjectType()
export class Directus_settingsGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  project_name!: string;

  @Field(() => String, { nullable: true })
  project_url?: string;

  @Field(() => String, { nullable: false })
  project_color!: string;

  @Field(() => String, { nullable: true })
  project_logo?: string;

  @Field(() => String, { nullable: true })
  public_foreground?: string;

  @Field(() => String, { nullable: true })
  public_background?: string;

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

  @Field(() => String, { nullable: true })
  storage_default_folder?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  basemaps?: any;

  @Field(() => String, { nullable: true })
  mapbox_key?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  module_bar?: any;

  @Field(() => String, { nullable: true })
  project_descriptor?: string;

  @Field(() => String, { nullable: false })
  default_language!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  custom_aspect_ratios?: any;

  @Field(() => String, { nullable: true })
  public_favicon?: string;

  @Field(() => String, { nullable: false })
  default_appearance!: string;

  @Field(() => String, { nullable: true })
  default_theme_light?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  theme_light_overrides?: any;

  @Field(() => String, { nullable: true })
  default_theme_dark?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  theme_dark_overrides?: any;

  @Field(() => Directus_settingsCountAggregate, { nullable: true })
  _count?: Directus_settingsCountAggregate;

  @Field(() => Directus_settingsAvgAggregate, { nullable: true })
  _avg?: Directus_settingsAvgAggregate;

  @Field(() => Directus_settingsSumAggregate, { nullable: true })
  _sum?: Directus_settingsSumAggregate;

  @Field(() => Directus_settingsMinAggregate, { nullable: true })
  _min?: Directus_settingsMinAggregate;

  @Field(() => Directus_settingsMaxAggregate, { nullable: true })
  _max?: Directus_settingsMaxAggregate;
}
