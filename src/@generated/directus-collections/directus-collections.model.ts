import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { directus_shares } from '../directus-shares/directus-shares.model';
import { directus_versions } from '../directus-versions/directus-versions.model';
import { Directus_collectionsCount } from '../prisma/directus-collections-count.output';

@ObjectType()
export class directus_collections {

    @Field(() => ID, {nullable:false})
    collection!: string;

    @Field(() => String, {nullable:true})
    icon!: string | null;

    @Field(() => String, {nullable:true})
    note!: string | null;

    @Field(() => String, {nullable:true})
    display_template!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    hidden!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    singleton!: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    translations!: any | null;

    @Field(() => String, {nullable:true})
    archive_field!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    archive_app_filter!: boolean;

    @Field(() => String, {nullable:true})
    archive_value!: string | null;

    @Field(() => String, {nullable:true})
    unarchive_value!: string | null;

    @Field(() => String, {nullable:true})
    sort_field!: string | null;

    @Field(() => String, {nullable:true,defaultValue:'all'})
    accountability!: string | null;

    @Field(() => String, {nullable:true})
    color!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    item_duplication_fields!: any | null;

    @Field(() => Int, {nullable:true})
    sort!: number | null;

    @Field(() => String, {nullable:true})
    group!: string | null;

    @Field(() => String, {nullable:false,defaultValue:'open'})
    collapse!: string;

    @Field(() => String, {nullable:true})
    preview_url!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    versioning!: boolean;

    @Field(() => directus_collections, {nullable:true})
    directus_collections?: directus_collections | null;

    @Field(() => [directus_collections], {nullable:true})
    other_directus_collections?: Array<directus_collections>;

    @Field(() => [directus_shares], {nullable:true})
    directus_shares?: Array<directus_shares>;

    @Field(() => [directus_versions], {nullable:true})
    directus_versions?: Array<directus_versions>;

    @Field(() => Directus_collectionsCount, {nullable:false})
    _count?: Directus_collectionsCount;
}
