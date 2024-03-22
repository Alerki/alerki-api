import { registerEnumType } from '@nestjs/graphql';

export enum Directus_settingsScalarFieldEnum {
    id = "id",
    project_name = "project_name",
    project_url = "project_url",
    project_color = "project_color",
    project_logo = "project_logo",
    public_foreground = "public_foreground",
    public_background = "public_background",
    public_note = "public_note",
    auth_login_attempts = "auth_login_attempts",
    auth_password_policy = "auth_password_policy",
    storage_asset_transform = "storage_asset_transform",
    storage_asset_presets = "storage_asset_presets",
    custom_css = "custom_css",
    storage_default_folder = "storage_default_folder",
    basemaps = "basemaps",
    mapbox_key = "mapbox_key",
    module_bar = "module_bar",
    project_descriptor = "project_descriptor",
    default_language = "default_language",
    custom_aspect_ratios = "custom_aspect_ratios",
    public_favicon = "public_favicon",
    default_appearance = "default_appearance",
    default_theme_light = "default_theme_light",
    theme_light_overrides = "theme_light_overrides",
    default_theme_dark = "default_theme_dark",
    theme_dark_overrides = "theme_dark_overrides"
}


registerEnumType(Directus_settingsScalarFieldEnum, { name: 'Directus_settingsScalarFieldEnum', description: undefined })
