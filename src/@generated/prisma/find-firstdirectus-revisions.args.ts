import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_revisionsWhereInput } from '../directus-revisions/directus-revisions-where.input';
import { Type } from 'class-transformer';
import { directus_revisionsOrderByWithRelationAndSearchRelevanceInput } from '../directus-revisions/directus-revisions-order-by-with-relation-and-search-relevance.input';
import { directus_revisionsWhereUniqueInput } from '../directus-revisions/directus-revisions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_revisionsScalarFieldEnum } from './directus-revisions-scalar-field.enum';

@ArgsType()
export class FindFirstdirectusRevisionsArgs {

    @Field(() => directus_revisionsWhereInput, {nullable:true})
    @Type(() => directus_revisionsWhereInput)
    where?: directus_revisionsWhereInput;

    @Field(() => [directus_revisionsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<directus_revisionsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => directus_revisionsWhereUniqueInput, {nullable:true})
    cursor?: directus_revisionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Directus_revisionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Directus_revisionsScalarFieldEnum>;
}
