import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';

@InputType()
export class directus_settingsScalarWhereWithAggregatesInput {

    @Field(() => [directus_settingsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<directus_settingsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_settingsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<directus_settingsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_settingsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<directus_settingsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    project_name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    project_url?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    project_color?: StringWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    project_logo?: UuidNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    public_foreground?: UuidNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    public_background?: UuidNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    public_note?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    auth_login_attempts?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    auth_password_policy?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    storage_asset_transform?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    storage_asset_presets?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    custom_css?: StringNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    storage_default_folder?: UuidNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    basemaps?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    mapbox_key?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    module_bar?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    project_descriptor?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    default_language?: StringWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    custom_aspect_ratios?: JsonNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    public_favicon?: UuidNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    default_appearance?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    default_theme_light?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    theme_light_overrides?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    default_theme_dark?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    theme_dark_overrides?: JsonNullableWithAggregatesFilter;
}
