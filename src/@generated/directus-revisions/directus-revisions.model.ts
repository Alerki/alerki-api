import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { directus_activity } from '../directus-activity/directus-activity.model';
import { directus_versions } from '../directus-versions/directus-versions.model';
import { Directus_revisionsCount } from '../prisma/directus-revisions-count.output';

@ObjectType()
export class directus_revisions {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    activity!: number;

    @Field(() => String, {nullable:false})
    collection!: string;

    @Field(() => String, {nullable:false})
    item!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    data!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    delta!: any | null;

    @Field(() => Int, {nullable:true})
    parent!: number | null;

    @Field(() => String, {nullable:true})
    version!: string | null;

    @Field(() => directus_activity, {nullable:false})
    directus_activity?: directus_activity;

    @Field(() => directus_revisions, {nullable:true})
    directus_revisions?: directus_revisions | null;

    @Field(() => [directus_revisions], {nullable:true})
    other_directus_revisions?: Array<directus_revisions>;

    @Field(() => directus_versions, {nullable:true})
    directus_versions?: directus_versions | null;

    @Field(() => Directus_revisionsCount, {nullable:false})
    _count?: Directus_revisionsCount;
}
