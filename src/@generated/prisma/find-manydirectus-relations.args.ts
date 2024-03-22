import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_relationsWhereInput } from '../directus-relations/directus-relations-where.input';
import { Type } from 'class-transformer';
import { directus_relationsOrderByWithRelationAndSearchRelevanceInput } from '../directus-relations/directus-relations-order-by-with-relation-and-search-relevance.input';
import { directus_relationsWhereUniqueInput } from '../directus-relations/directus-relations-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_relationsScalarFieldEnum } from './directus-relations-scalar-field.enum';

@ArgsType()
export class FindManydirectusRelationsArgs {

    @Field(() => directus_relationsWhereInput, {nullable:true})
    @Type(() => directus_relationsWhereInput)
    where?: directus_relationsWhereInput;

    @Field(() => [directus_relationsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<directus_relationsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => directus_relationsWhereUniqueInput, {nullable:true})
    cursor?: directus_relationsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Directus_relationsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Directus_relationsScalarFieldEnum>;
}
