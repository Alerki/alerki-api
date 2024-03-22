import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_operationsWhereInput } from '../directus-operations/directus-operations-where.input';
import { Type } from 'class-transformer';
import { directus_operationsOrderByWithRelationAndSearchRelevanceInput } from '../directus-operations/directus-operations-order-by-with-relation-and-search-relevance.input';
import { directus_operationsWhereUniqueInput } from '../directus-operations/directus-operations-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_operationsScalarFieldEnum } from './directus-operations-scalar-field.enum';

@ArgsType()
export class FindFirstdirectusOperationsArgs {

    @Field(() => directus_operationsWhereInput, {nullable:true})
    @Type(() => directus_operationsWhereInput)
    where?: directus_operationsWhereInput;

    @Field(() => [directus_operationsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<directus_operationsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => directus_operationsWhereUniqueInput, {nullable:true})
    cursor?: directus_operationsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Directus_operationsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Directus_operationsScalarFieldEnum>;
}
