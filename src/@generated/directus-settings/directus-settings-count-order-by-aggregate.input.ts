import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_settingsCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    project_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    project_url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    project_color?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    project_logo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    public_foreground?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    public_background?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    public_note?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    auth_login_attempts?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    auth_password_policy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    storage_asset_transform?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    storage_asset_presets?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    custom_css?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    storage_default_folder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    basemaps?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mapbox_key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    module_bar?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    project_descriptor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    default_language?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    custom_aspect_ratios?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    public_favicon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    default_appearance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    default_theme_light?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    theme_light_overrides?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    default_theme_dark?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    theme_dark_overrides?: keyof typeof SortOrder;
}
