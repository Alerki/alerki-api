import { registerEnumType } from '@nestjs/graphql';

export enum Directus_collectionsScalarFieldEnum {
    collection = "collection",
    icon = "icon",
    note = "note",
    display_template = "display_template",
    hidden = "hidden",
    singleton = "singleton",
    translations = "translations",
    archive_field = "archive_field",
    archive_app_filter = "archive_app_filter",
    archive_value = "archive_value",
    unarchive_value = "unarchive_value",
    sort_field = "sort_field",
    accountability = "accountability",
    color = "color",
    item_duplication_fields = "item_duplication_fields",
    sort = "sort",
    group = "group",
    collapse = "collapse",
    preview_url = "preview_url",
    versioning = "versioning"
}


registerEnumType(Directus_collectionsScalarFieldEnum, { name: 'Directus_collectionsScalarFieldEnum', description: undefined })
