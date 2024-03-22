import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_versionsWhereInput } from '../directus-versions/directus-versions-where.input';
import { Type } from 'class-transformer';
import { directus_versionsOrderByWithRelationAndSearchRelevanceInput } from '../directus-versions/directus-versions-order-by-with-relation-and-search-relevance.input';
import { directus_versionsWhereUniqueInput } from '../directus-versions/directus-versions-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatedirectusVersionsArgs {

    @Field(() => directus_versionsWhereInput, {nullable:true})
    @Type(() => directus_versionsWhereInput)
    where?: directus_versionsWhereInput;

    @Field(() => [directus_versionsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<directus_versionsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => directus_versionsWhereUniqueInput, {nullable:true})
    cursor?: directus_versionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
