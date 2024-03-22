import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_settingsCountOrderByAggregateInput } from './directus-settings-count-order-by-aggregate.input';
import { directus_settingsAvgOrderByAggregateInput } from './directus-settings-avg-order-by-aggregate.input';
import { directus_settingsMaxOrderByAggregateInput } from './directus-settings-max-order-by-aggregate.input';
import { directus_settingsMinOrderByAggregateInput } from './directus-settings-min-order-by-aggregate.input';
import { directus_settingsSumOrderByAggregateInput } from './directus-settings-sum-order-by-aggregate.input';

@InputType()
export class directus_settingsOrderByWithAggregationInput {

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

    @Field(() => directus_settingsCountOrderByAggregateInput, {nullable:true})
    _count?: directus_settingsCountOrderByAggregateInput;

    @Field(() => directus_settingsAvgOrderByAggregateInput, {nullable:true})
    _avg?: directus_settingsAvgOrderByAggregateInput;

    @Field(() => directus_settingsMaxOrderByAggregateInput, {nullable:true})
    _max?: directus_settingsMaxOrderByAggregateInput;

    @Field(() => directus_settingsMinOrderByAggregateInput, {nullable:true})
    _min?: directus_settingsMinOrderByAggregateInput;

    @Field(() => directus_settingsSumOrderByAggregateInput, {nullable:true})
    _sum?: directus_settingsSumOrderByAggregateInput;
}
