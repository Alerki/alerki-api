import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionWhereInput } from './session-where.input';
import { Type } from 'class-transformer';
import { SessionOrderByWithRelationAndSearchRelevanceInput } from './session-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SessionCountAggregateInput } from './session-count-aggregate.input';
import { SessionMinAggregateInput } from './session-min-aggregate.input';
import { SessionMaxAggregateInput } from './session-max-aggregate.input';

@ArgsType()
export class SessionAggregateArgs {

    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    where?: SessionWhereInput;

    @Field(() => [SessionOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => SessionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SessionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SessionCountAggregateInput, {nullable:true})
    _count?: SessionCountAggregateInput;

    @Field(() => SessionMinAggregateInput, {nullable:true})
    _min?: SessionMinAggregateInput;

    @Field(() => SessionMaxAggregateInput, {nullable:true})
    _max?: SessionMaxAggregateInput;
}
