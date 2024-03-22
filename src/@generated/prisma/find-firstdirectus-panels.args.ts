import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_panelsWhereInput } from '../directus-panels/directus-panels-where.input';
import { Type } from 'class-transformer';
import { directus_panelsOrderByWithRelationAndSearchRelevanceInput } from '../directus-panels/directus-panels-order-by-with-relation-and-search-relevance.input';
import { directus_panelsWhereUniqueInput } from '../directus-panels/directus-panels-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_panelsScalarFieldEnum } from './directus-panels-scalar-field.enum';

@ArgsType()
export class FindFirstdirectusPanelsArgs {

    @Field(() => directus_panelsWhereInput, {nullable:true})
    @Type(() => directus_panelsWhereInput)
    where?: directus_panelsWhereInput;

    @Field(() => [directus_panelsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<directus_panelsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => directus_panelsWhereUniqueInput, {nullable:true})
    cursor?: directus_panelsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Directus_panelsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Directus_panelsScalarFieldEnum>;
}
