import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class directus_settingsScalarWhereInput {
  @Field(() => [directus_settingsScalarWhereInput], { nullable: true })
  AND?: Array<directus_settingsScalarWhereInput>;

  @Field(() => [directus_settingsScalarWhereInput], { nullable: true })
  OR?: Array<directus_settingsScalarWhereInput>;

  @Field(() => [directus_settingsScalarWhereInput], { nullable: true })
  NOT?: Array<directus_settingsScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  project_name?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  project_url?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  project_color?: StringFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  project_logo?: UuidNullableFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  public_foreground?: UuidNullableFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  public_background?: UuidNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  public_note?: StringNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  auth_login_attempts?: IntNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  auth_password_policy?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  storage_asset_transform?: StringNullableFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  storage_asset_presets?: JsonNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  custom_css?: StringNullableFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  storage_default_folder?: UuidNullableFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  basemaps?: JsonNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  mapbox_key?: StringNullableFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  module_bar?: JsonNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  project_descriptor?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  default_language?: StringFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  custom_aspect_ratios?: JsonNullableFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  public_favicon?: UuidNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  default_appearance?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  default_theme_light?: StringNullableFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  theme_light_overrides?: JsonNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  default_theme_dark?: StringNullableFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  theme_dark_overrides?: JsonNullableFilter;
}
