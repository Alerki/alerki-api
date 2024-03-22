import { registerEnumType } from '@nestjs/graphql';

export enum directus_filesOrderByRelevanceFieldEnum {
    id = "id",
    storage = "storage",
    filename_disk = "filename_disk",
    filename_download = "filename_download",
    title = "title",
    type = "type",
    folder = "folder",
    uploaded_by = "uploaded_by",
    modified_by = "modified_by",
    charset = "charset",
    embed = "embed",
    description = "description",
    location = "location",
    tags = "tags"
}


registerEnumType(directus_filesOrderByRelevanceFieldEnum, { name: 'directus_filesOrderByRelevanceFieldEnum', description: undefined })
