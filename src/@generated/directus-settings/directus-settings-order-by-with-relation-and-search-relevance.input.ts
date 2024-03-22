import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_filesOrderByWithRelationAndSearchRelevanceInput } from '../directus-files/directus-files-order-by-with-relation-and-search-relevance.input';
import { directus_foldersOrderByWithRelationAndSearchRelevanceInput } from '../directus-folders/directus-folders-order-by-with-relation-and-search-relevance.input';
import { directus_settingsOrderByRelevanceInput } from './directus-settings-order-by-relevance.input';

@InputType()
export class directus_settingsOrderByWithRelationAndSearchRelevanceInput {

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

    @Field(() => directus_filesOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_files_directus_settings_project_logoTodirectus_files?: directus_filesOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_filesOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_files_directus_settings_public_backgroundTodirectus_files?: directus_filesOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_filesOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_files_directus_settings_public_faviconTodirectus_files?: directus_filesOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_filesOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_files_directus_settings_public_foregroundTodirectus_files?: directus_filesOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_foldersOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_folders?: directus_foldersOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_settingsOrderByRelevanceInput, {nullable:true})
    _relevance?: directus_settingsOrderByRelevanceInput;
}
