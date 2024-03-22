import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { directus_revisions } from '../directus-revisions/directus-revisions.model';
import { directus_collections } from '../directus-collections/directus-collections.model';
import { directus_users } from '../directus-users/directus-users.model';
import { Directus_versionsCount } from '../prisma/directus-versions-count.output';

@ObjectType()
export class directus_versions {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:false})
    collection!: string;

    @Field(() => String, {nullable:false})
    item!: string;

    @Field(() => String, {nullable:true})
    hash!: string | null;

    @Field(() => Date, {nullable:true})
    date_created!: Date | null;

    @Field(() => Date, {nullable:true})
    date_updated!: Date | null;

    @Field(() => String, {nullable:true})
    user_created!: string | null;

    @Field(() => String, {nullable:true})
    user_updated!: string | null;

    @Field(() => [directus_revisions], {nullable:true})
    directus_revisions?: Array<directus_revisions>;

    @Field(() => directus_collections, {nullable:false})
    directus_collections?: directus_collections;

    @Field(() => directus_users, {nullable:true})
    directus_users_directus_versions_user_createdTodirectus_users?: directus_users | null;

    @Field(() => directus_users, {nullable:true})
    directus_users_directus_versions_user_updatedTodirectus_users?: directus_users | null;

    @Field(() => Directus_versionsCount, {nullable:false})
    _count?: Directus_versionsCount;
}
