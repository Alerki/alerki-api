import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_extensionsWhereInput } from '../directus-extensions/directus-extensions-where.input';
import { Type } from 'class-transformer';
import { directus_extensionsOrderByWithRelationAndSearchRelevanceInput } from '../directus-extensions/directus-extensions-order-by-with-relation-and-search-relevance.input';
import { directus_extensionsWhereUniqueInput } from '../directus-extensions/directus-extensions-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatedirectusExtensionsArgs {

    @Field(() => directus_extensionsWhereInput, {nullable:true})
    @Type(() => directus_extensionsWhereInput)
    where?: directus_extensionsWhereInput;

    @Field(() => [directus_extensionsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<directus_extensionsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => directus_extensionsWhereUniqueInput, {nullable:true})
    cursor?: directus_extensionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
