import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceWhereInput } from './service-where.input';
import { Type } from 'class-transformer';
import { ServiceOrderByWithAggregationInput } from './service-order-by-with-aggregation.input';
import { ServiceScalarFieldEnum } from './service-scalar-field.enum';
import { ServiceScalarWhereWithAggregatesInput } from './service-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ServiceCountAggregateInput } from './service-count-aggregate.input';
import { ServiceAvgAggregateInput } from './service-avg-aggregate.input';
import { ServiceSumAggregateInput } from './service-sum-aggregate.input';
import { ServiceMinAggregateInput } from './service-min-aggregate.input';
import { ServiceMaxAggregateInput } from './service-max-aggregate.input';

@ArgsType()
export class ServiceGroupByArgs {

    @Field(() => ServiceWhereInput, {nullable:true})
    @Type(() => ServiceWhereInput)
    where?: ServiceWhereInput;

    @Field(() => [ServiceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ServiceOrderByWithAggregationInput>;

    @Field(() => [ServiceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ServiceScalarFieldEnum>;

    @Field(() => ServiceScalarWhereWithAggregatesInput, {nullable:true})
    having?: ServiceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ServiceCountAggregateInput, {nullable:true})
    _count?: ServiceCountAggregateInput;

    @Field(() => ServiceAvgAggregateInput, {nullable:true})
    _avg?: ServiceAvgAggregateInput;

    @Field(() => ServiceSumAggregateInput, {nullable:true})
    _sum?: ServiceSumAggregateInput;

    @Field(() => ServiceMinAggregateInput, {nullable:true})
    _min?: ServiceMinAggregateInput;

    @Field(() => ServiceMaxAggregateInput, {nullable:true})
    _max?: ServiceMaxAggregateInput;
}
