import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterServiceWhereInput } from './master-service-where.input';
import { Type } from 'class-transformer';
import { MasterServiceOrderByWithAggregationInput } from './master-service-order-by-with-aggregation.input';
import { MasterServiceScalarFieldEnum } from './master-service-scalar-field.enum';
import { MasterServiceScalarWhereWithAggregatesInput } from './master-service-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MasterServiceCountAggregateInput } from './master-service-count-aggregate.input';
import { MasterServiceAvgAggregateInput } from './master-service-avg-aggregate.input';
import { MasterServiceSumAggregateInput } from './master-service-sum-aggregate.input';
import { MasterServiceMinAggregateInput } from './master-service-min-aggregate.input';
import { MasterServiceMaxAggregateInput } from './master-service-max-aggregate.input';

@ArgsType()
export class MasterServiceGroupByArgs {

    @Field(() => MasterServiceWhereInput, {nullable:true})
    @Type(() => MasterServiceWhereInput)
    where?: MasterServiceWhereInput;

    @Field(() => [MasterServiceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MasterServiceOrderByWithAggregationInput>;

    @Field(() => [MasterServiceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MasterServiceScalarFieldEnum>;

    @Field(() => MasterServiceScalarWhereWithAggregatesInput, {nullable:true})
    having?: MasterServiceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MasterServiceCountAggregateInput, {nullable:true})
    _count?: MasterServiceCountAggregateInput;

    @Field(() => MasterServiceAvgAggregateInput, {nullable:true})
    _avg?: MasterServiceAvgAggregateInput;

    @Field(() => MasterServiceSumAggregateInput, {nullable:true})
    _sum?: MasterServiceSumAggregateInput;

    @Field(() => MasterServiceMinAggregateInput, {nullable:true})
    _min?: MasterServiceMinAggregateInput;

    @Field(() => MasterServiceMaxAggregateInput, {nullable:true})
    _max?: MasterServiceMaxAggregateInput;
}
