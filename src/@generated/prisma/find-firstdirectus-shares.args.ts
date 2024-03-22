import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sharesWhereInput } from '../directus-shares/directus-shares-where.input';
import { Type } from 'class-transformer';
import { directus_sharesOrderByWithRelationAndSearchRelevanceInput } from '../directus-shares/directus-shares-order-by-with-relation-and-search-relevance.input';
import { directus_sharesWhereUniqueInput } from '../directus-shares/directus-shares-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_sharesScalarFieldEnum } from './directus-shares-scalar-field.enum';

@ArgsType()
export class FindFirstdirectusSharesArgs {

    @Field(() => directus_sharesWhereInput, {nullable:true})
    @Type(() => directus_sharesWhereInput)
    where?: directus_sharesWhereInput;

    @Field(() => [directus_sharesOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<directus_sharesOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => directus_sharesWhereUniqueInput, {nullable:true})
    cursor?: directus_sharesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Directus_sharesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Directus_sharesScalarFieldEnum>;
}
