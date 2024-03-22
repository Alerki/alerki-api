import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { directus_filesUpdateOneWithoutDirectus_settings_directus_settings_public_backgroundTodirectus_filesNestedInput } from '../directus-files/directus-files-update-one-without-directus-settings-directus-settings-public-background-todirectus-files-nested.input';
import { directus_filesUpdateOneWithoutDirectus_settings_directus_settings_public_faviconTodirectus_filesNestedInput } from '../directus-files/directus-files-update-one-without-directus-settings-directus-settings-public-favicon-todirectus-files-nested.input';
import { directus_filesUpdateOneWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesNestedInput } from '../directus-files/directus-files-update-one-without-directus-settings-directus-settings-public-foreground-todirectus-files-nested.input';
import { directus_foldersUpdateOneWithoutDirectus_settingsNestedInput } from '../directus-folders/directus-folders-update-one-without-directus-settings-nested.input';

@InputType()
export class directus_settingsUpdateWithoutDirectus_files_directus_settings_project_logoTodirectus_filesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    project_name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    project_url?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    project_color?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    public_note?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    auth_login_attempts?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    auth_password_policy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    storage_asset_transform?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    storage_asset_presets?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    custom_css?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    basemaps?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    mapbox_key?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    module_bar?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    project_descriptor?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    default_language?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    custom_aspect_ratios?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    default_appearance?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    default_theme_light?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    theme_light_overrides?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    default_theme_dark?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    theme_dark_overrides?: any;

    @Field(() => directus_filesUpdateOneWithoutDirectus_settings_directus_settings_public_backgroundTodirectus_filesNestedInput, {nullable:true})
    directus_files_directus_settings_public_backgroundTodirectus_files?: directus_filesUpdateOneWithoutDirectus_settings_directus_settings_public_backgroundTodirectus_filesNestedInput;

    @Field(() => directus_filesUpdateOneWithoutDirectus_settings_directus_settings_public_faviconTodirectus_filesNestedInput, {nullable:true})
    directus_files_directus_settings_public_faviconTodirectus_files?: directus_filesUpdateOneWithoutDirectus_settings_directus_settings_public_faviconTodirectus_filesNestedInput;

    @Field(() => directus_filesUpdateOneWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesNestedInput, {nullable:true})
    directus_files_directus_settings_public_foregroundTodirectus_files?: directus_filesUpdateOneWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesNestedInput;

    @Field(() => directus_foldersUpdateOneWithoutDirectus_settingsNestedInput, {nullable:true})
    directus_folders?: directus_foldersUpdateOneWithoutDirectus_settingsNestedInput;
}
