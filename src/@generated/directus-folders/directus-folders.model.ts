import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { directus_files } from '../directus-files/directus-files.model';
import { directus_settings } from '../directus-settings/directus-settings.model';
import { Directus_foldersCount } from '../prisma/directus-folders-count.output';

@ObjectType()
export class directus_folders {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    parent!: string | null;

    @Field(() => [directus_files], {nullable:true})
    directus_files?: Array<directus_files>;

    @Field(() => directus_folders, {nullable:true})
    directus_folders?: directus_folders | null;

    @Field(() => [directus_folders], {nullable:true})
    other_directus_folders?: Array<directus_folders>;

    @Field(() => [directus_settings], {nullable:true})
    directus_settings?: Array<directus_settings>;

    @Field(() => Directus_foldersCount, {nullable:false})
    _count?: Directus_foldersCount;
}
