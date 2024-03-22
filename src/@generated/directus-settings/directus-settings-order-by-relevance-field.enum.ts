import { registerEnumType } from '@nestjs/graphql';

export enum directus_settingsOrderByRelevanceFieldEnum {
    project_name = "project_name",
    project_url = "project_url",
    project_color = "project_color",
    project_logo = "project_logo",
    public_foreground = "public_foreground",
    public_background = "public_background",
    public_note = "public_note",
    auth_password_policy = "auth_password_policy",
    storage_asset_transform = "storage_asset_transform",
    custom_css = "custom_css",
    storage_default_folder = "storage_default_folder",
    mapbox_key = "mapbox_key",
    project_descriptor = "project_descriptor",
    default_language = "default_language",
    public_favicon = "public_favicon",
    default_appearance = "default_appearance",
    default_theme_light = "default_theme_light",
    default_theme_dark = "default_theme_dark"
}


registerEnumType(directus_settingsOrderByRelevanceFieldEnum, { name: 'directus_settingsOrderByRelevanceFieldEnum', description: undefined })
