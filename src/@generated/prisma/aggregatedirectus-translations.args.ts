import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_translationsWhereInput } from '../directus-translations/directus-translations-where.input';
import { Type } from 'class-transformer';
import { directus_translationsOrderByWithRelationAndSearchRelevanceInput } from '../directus-translations/directus-translations-order-by-with-relation-and-search-relevance.input';
import { directus_translationsWhereUniqueInput } from '../directus-translations/directus-translations-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatedirectusTranslationsArgs {

    @Field(() => directus_translationsWhereInput, {nullable:true})
    @Type(() => directus_translationsWhereInput)
    where?: directus_translationsWhereInput;

    @Field(() => [directus_translationsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<directus_translationsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => directus_translationsWhereUniqueInput, {nullable:true})
    cursor?: directus_translationsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
