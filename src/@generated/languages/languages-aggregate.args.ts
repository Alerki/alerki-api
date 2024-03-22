import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { languagesWhereInput } from './languages-where.input';
import { Type } from 'class-transformer';
import { languagesOrderByWithRelationAndSearchRelevanceInput } from './languages-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class languagesAggregateArgs {

    @Field(() => languagesWhereInput, {nullable:true})
    @Type(() => languagesWhereInput)
    where?: languagesWhereInput;

    @Field(() => [languagesOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<languagesOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<languagesWhereUniqueInput, 'code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
