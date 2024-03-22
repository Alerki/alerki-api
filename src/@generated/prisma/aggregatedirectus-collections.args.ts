import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_collectionsWhereInput } from '../directus-collections/directus-collections-where.input';
import { Type } from 'class-transformer';
import { directus_collectionsOrderByWithRelationAndSearchRelevanceInput } from '../directus-collections/directus-collections-order-by-with-relation-and-search-relevance.input';
import { directus_collectionsWhereUniqueInput } from '../directus-collections/directus-collections-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatedirectusCollectionsArgs {

    @Field(() => directus_collectionsWhereInput, {nullable:true})
    @Type(() => directus_collectionsWhereInput)
    where?: directus_collectionsWhereInput;

    @Field(() => [directus_collectionsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<directus_collectionsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => directus_collectionsWhereUniqueInput, {nullable:true})
    cursor?: directus_collectionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
