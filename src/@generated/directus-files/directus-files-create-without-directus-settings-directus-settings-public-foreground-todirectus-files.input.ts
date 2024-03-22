import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { UserPictureCreateNestedManyWithoutDirectus_filesInput } from '../user-picture/user-picture-create-nested-many-without-directus-files.input';
import { directus_foldersCreateNestedOneWithoutDirectus_filesInput } from '../directus-folders/directus-folders-create-nested-one-without-directus-files.input';
import { directus_usersCreateNestedOneWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput } from '../directus-users/directus-users-create-nested-one-without-directus-files-directus-files-modified-by-todirectus-users.input';
import { directus_usersCreateNestedOneWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput } from '../directus-users/directus-users-create-nested-one-without-directus-files-directus-files-uploaded-by-todirectus-users.input';
import { directus_settingsCreateNestedManyWithoutDirectus_files_directus_settings_project_logoTodirectus_filesInput } from '../directus-settings/directus-settings-create-nested-many-without-directus-files-directus-settings-project-logo-todirectus-files.input';
import { directus_settingsCreateNestedManyWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput } from '../directus-settings/directus-settings-create-nested-many-without-directus-files-directus-settings-public-background-todirectus-files.input';
import { directus_settingsCreateNestedManyWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesInput } from '../directus-settings/directus-settings-create-nested-many-without-directus-files-directus-settings-public-favicon-todirectus-files.input';

@InputType()
export class directus_filesCreateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    storage!: string;

    @Field(() => String, {nullable:true})
    filename_disk?: string;

    @Field(() => String, {nullable:false})
    filename_download!: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => Date, {nullable:true})
    uploaded_on?: Date | string;

    @Field(() => Date, {nullable:true})
    modified_on?: Date | string;

    @Field(() => String, {nullable:true})
    charset?: string;

    @Field(() => String, {nullable:true})
    filesize?: bigint | number;

    @Field(() => Int, {nullable:true})
    width?: number;

    @Field(() => Int, {nullable:true})
    height?: number;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => String, {nullable:true})
    embed?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => String, {nullable:true})
    tags?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Int, {nullable:true})
    focal_point_x?: number;

    @Field(() => Int, {nullable:true})
    focal_point_y?: number;

    @Field(() => UserPictureCreateNestedManyWithoutDirectus_filesInput, {nullable:true})
    UserPicture?: UserPictureCreateNestedManyWithoutDirectus_filesInput;

    @Field(() => directus_foldersCreateNestedOneWithoutDirectus_filesInput, {nullable:true})
    directus_folders?: directus_foldersCreateNestedOneWithoutDirectus_filesInput;

    @Field(() => directus_usersCreateNestedOneWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput, {nullable:true})
    directus_users_directus_files_modified_byTodirectus_users?: directus_usersCreateNestedOneWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput;

    @Field(() => directus_usersCreateNestedOneWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput, {nullable:true})
    directus_users_directus_files_uploaded_byTodirectus_users?: directus_usersCreateNestedOneWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput;

    @Field(() => directus_settingsCreateNestedManyWithoutDirectus_files_directus_settings_project_logoTodirectus_filesInput, {nullable:true})
    directus_settings_directus_settings_project_logoTodirectus_files?: directus_settingsCreateNestedManyWithoutDirectus_files_directus_settings_project_logoTodirectus_filesInput;

    @Field(() => directus_settingsCreateNestedManyWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput, {nullable:true})
    directus_settings_directus_settings_public_backgroundTodirectus_files?: directus_settingsCreateNestedManyWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput;

    @Field(() => directus_settingsCreateNestedManyWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesInput, {nullable:true})
    directus_settings_directus_settings_public_faviconTodirectus_files?: directus_settingsCreateNestedManyWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesInput;
}
