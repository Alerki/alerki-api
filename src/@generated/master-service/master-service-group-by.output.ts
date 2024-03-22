import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MasterServiceCountAggregate } from './master-service-count-aggregate.output';
import { MasterServiceAvgAggregate } from './master-service-avg-aggregate.output';
import { MasterServiceSumAggregate } from './master-service-sum-aggregate.output';
import { MasterServiceMinAggregate } from './master-service-min-aggregate.output';
import { MasterServiceMaxAggregate } from './master-service-max-aggregate.output';

@ObjectType()
export class MasterServiceGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => String, {nullable:false})
    masterProfile!: string;

    @Field(() => Date, {nullable:false})
    duration!: Date | string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Int, {nullable:false})
    service!: number;

    @Field(() => MasterServiceCountAggregate, {nullable:true})
    _count?: MasterServiceCountAggregate;

    @Field(() => MasterServiceAvgAggregate, {nullable:true})
    _avg?: MasterServiceAvgAggregate;

    @Field(() => MasterServiceSumAggregate, {nullable:true})
    _sum?: MasterServiceSumAggregate;

    @Field(() => MasterServiceMinAggregate, {nullable:true})
    _min?: MasterServiceMinAggregate;

    @Field(() => MasterServiceMaxAggregate, {nullable:true})
    _max?: MasterServiceMaxAggregate;
}
