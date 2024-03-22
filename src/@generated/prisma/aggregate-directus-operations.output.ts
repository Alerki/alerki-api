import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_operationsCountAggregate } from './directus-operations-count-aggregate.output';
import { Directus_operationsAvgAggregate } from './directus-operations-avg-aggregate.output';
import { Directus_operationsSumAggregate } from './directus-operations-sum-aggregate.output';
import { Directus_operationsMinAggregate } from './directus-operations-min-aggregate.output';
import { Directus_operationsMaxAggregate } from './directus-operations-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_operations {

    @Field(() => Directus_operationsCountAggregate, {nullable:true})
    _count?: Directus_operationsCountAggregate;

    @Field(() => Directus_operationsAvgAggregate, {nullable:true})
    _avg?: Directus_operationsAvgAggregate;

    @Field(() => Directus_operationsSumAggregate, {nullable:true})
    _sum?: Directus_operationsSumAggregate;

    @Field(() => Directus_operationsMinAggregate, {nullable:true})
    _min?: Directus_operationsMinAggregate;

    @Field(() => Directus_operationsMaxAggregate, {nullable:true})
    _max?: Directus_operationsMaxAggregate;
}
