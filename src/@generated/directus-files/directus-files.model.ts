import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { UserPicture } from '../user-picture/user-picture.model';
import { directus_folders } from '../directus-folders/directus-folders.model';
import { directus_users } from '../directus-users/directus-users.model';
import { directus_settings } from '../directus-settings/directus-settings.model';
import { Directus_filesCount } from '../prisma/directus-files-count.output';

@ObjectType()
export class directus_files {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    storage!: string;

    @Field(() => String, {nullable:true})
    filename_disk!: string | null;

    @Field(() => String, {nullable:false})
    filename_download!: string;

    @Field(() => String, {nullable:true})
    title!: string | null;

    @Field(() => String, {nullable:true})
    type!: string | null;

    @Field(() => String, {nullable:true})
    folder!: string | null;

    @Field(() => String, {nullable:true})
    uploaded_by!: string | null;

    @Field(() => Date, {nullable:false})
    uploaded_on!: Date;

    @Field(() => String, {nullable:true})
    modified_by!: string | null;

    @Field(() => Date, {nullable:false})
    modified_on!: Date;

    @Field(() => String, {nullable:true})
    charset!: string | null;

    @Field(() => String, {nullable:true})
    filesize!: bigint | null;

    @Field(() => Int, {nullable:true})
    width!: number | null;

    @Field(() => Int, {nullable:true})
    height!: number | null;

    @Field(() => Int, {nullable:true})
    duration!: number | null;

    @Field(() => String, {nullable:true})
    embed!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    location!: string | null;

    @Field(() => String, {nullable:true})
    tags!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => Int, {nullable:true})
    focal_point_x!: number | null;

    @Field(() => Int, {nullable:true})
    focal_point_y!: number | null;

    @Field(() => [UserPicture], {nullable:true})
    UserPicture?: Array<UserPicture>;

    @Field(() => directus_folders, {nullable:true})
    directus_folders?: directus_folders | null;

    @Field(() => directus_users, {nullable:true})
    directus_users_directus_files_modified_byTodirectus_users?: directus_users | null;

    @Field(() => directus_users, {nullable:true})
    directus_users_directus_files_uploaded_byTodirectus_users?: directus_users | null;

    @Field(() => [directus_settings], {nullable:true})
    directus_settings_directus_settings_project_logoTodirectus_files?: Array<directus_settings>;

    @Field(() => [directus_settings], {nullable:true})
    directus_settings_directus_settings_public_backgroundTodirectus_files?: Array<directus_settings>;

    @Field(() => [directus_settings], {nullable:true})
    directus_settings_directus_settings_public_faviconTodirectus_files?: Array<directus_settings>;

    @Field(() => [directus_settings], {nullable:true})
    directus_settings_directus_settings_public_foregroundTodirectus_files?: Array<directus_settings>;

    @Field(() => Directus_filesCount, {nullable:false})
    _count?: Directus_filesCount;
}
