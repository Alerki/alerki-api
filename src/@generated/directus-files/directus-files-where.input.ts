import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { UserPictureListRelationFilter } from '../user-picture/user-picture-list-relation-filter.input';
import { Directus_foldersRelationFilter } from '../prisma/directus-folders-relation-filter.input';
import { Directus_usersRelationFilter } from '../prisma/directus-users-relation-filter.input';
import { Directus_settingsListRelationFilter } from '../prisma/directus-settings-list-relation-filter.input';

@InputType()
export class directus_filesWhereInput {

    @Field(() => [directus_filesWhereInput], {nullable:true})
    AND?: Array<directus_filesWhereInput>;

    @Field(() => [directus_filesWhereInput], {nullable:true})
    OR?: Array<directus_filesWhereInput>;

    @Field(() => [directus_filesWhereInput], {nullable:true})
    NOT?: Array<directus_filesWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    storage?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    filename_disk?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    filename_download?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    type?: StringNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    folder?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    uploaded_by?: UuidNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    uploaded_on?: DateTimeFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    modified_by?: UuidNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    modified_on?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    charset?: StringNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    filesize?: BigIntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    width?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    height?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    duration?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    embed?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    location?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tags?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    focal_point_x?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    focal_point_y?: IntNullableFilter;

    @Field(() => UserPictureListRelationFilter, {nullable:true})
    UserPicture?: UserPictureListRelationFilter;

    @Field(() => Directus_foldersRelationFilter, {nullable:true})
    directus_folders?: Directus_foldersRelationFilter;

    @Field(() => Directus_usersRelationFilter, {nullable:true})
    directus_users_directus_files_modified_byTodirectus_users?: Directus_usersRelationFilter;

    @Field(() => Directus_usersRelationFilter, {nullable:true})
    directus_users_directus_files_uploaded_byTodirectus_users?: Directus_usersRelationFilter;

    @Field(() => Directus_settingsListRelationFilter, {nullable:true})
    directus_settings_directus_settings_project_logoTodirectus_files?: Directus_settingsListRelationFilter;

    @Field(() => Directus_settingsListRelationFilter, {nullable:true})
    directus_settings_directus_settings_public_backgroundTodirectus_files?: Directus_settingsListRelationFilter;

    @Field(() => Directus_settingsListRelationFilter, {nullable:true})
    directus_settings_directus_settings_public_faviconTodirectus_files?: Directus_settingsListRelationFilter;

    @Field(() => Directus_settingsListRelationFilter, {nullable:true})
    directus_settings_directus_settings_public_foregroundTodirectus_files?: Directus_settingsListRelationFilter;
}
