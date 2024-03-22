import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MasterServiceCountAggregate } from './master-service-count-aggregate.output';
import { MasterServiceAvgAggregate } from './master-service-avg-aggregate.output';
import { MasterServiceSumAggregate } from './master-service-sum-aggregate.output';
import { MasterServiceMinAggregate } from './master-service-min-aggregate.output';
import { MasterServiceMaxAggregate } from './master-service-max-aggregate.output';

@ObjectType()
export class AggregateMasterService {

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
