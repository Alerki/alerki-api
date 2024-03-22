import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionWhereInput } from './session-where.input';
import { Type } from 'class-transformer';
import { SessionOrderByWithAggregationInput } from './session-order-by-with-aggregation.input';
import { SessionScalarFieldEnum } from './session-scalar-field.enum';
import { SessionScalarWhereWithAggregatesInput } from './session-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SessionCountAggregateInput } from './session-count-aggregate.input';
import { SessionMinAggregateInput } from './session-min-aggregate.input';
import { SessionMaxAggregateInput } from './session-max-aggregate.input';

@ArgsType()
export class SessionGroupByArgs {

    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    where?: SessionWhereInput;

    @Field(() => [SessionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithAggregationInput>;

    @Field(() => [SessionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SessionScalarFieldEnum>;

    @Field(() => SessionScalarWhereWithAggregatesInput, {nullable:true})
    having?: SessionScalarWhereWithAggregatesInput;

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
