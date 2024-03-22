import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { Directus_filesListRelationFilter } from '../prisma/directus-files-list-relation-filter.input';
import { Directus_foldersRelationFilter } from '../prisma/directus-folders-relation-filter.input';
import { Directus_foldersListRelationFilter } from '../prisma/directus-folders-list-relation-filter.input';
import { Directus_settingsListRelationFilter } from '../prisma/directus-settings-list-relation-filter.input';

@InputType()
export class directus_foldersWhereInput {

    @Field(() => [directus_foldersWhereInput], {nullable:true})
    AND?: Array<directus_foldersWhereInput>;

    @Field(() => [directus_foldersWhereInput], {nullable:true})
    OR?: Array<directus_foldersWhereInput>;

    @Field(() => [directus_foldersWhereInput], {nullable:true})
    NOT?: Array<directus_foldersWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    parent?: UuidNullableFilter;

    @Field(() => Directus_filesListRelationFilter, {nullable:true})
    directus_files?: Directus_filesListRelationFilter;

    @Field(() => Directus_foldersRelationFilter, {nullable:true})
    directus_folders?: Directus_foldersRelationFilter;

    @Field(() => Directus_foldersListRelationFilter, {nullable:true})
    other_directus_folders?: Directus_foldersListRelationFilter;

    @Field(() => Directus_settingsListRelationFilter, {nullable:true})
    directus_settings?: Directus_settingsListRelationFilter;
}
