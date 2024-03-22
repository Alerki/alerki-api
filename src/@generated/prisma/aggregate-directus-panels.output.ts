import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_panelsCountAggregate } from './directus-panels-count-aggregate.output';
import { Directus_panelsAvgAggregate } from './directus-panels-avg-aggregate.output';
import { Directus_panelsSumAggregate } from './directus-panels-sum-aggregate.output';
import { Directus_panelsMinAggregate } from './directus-panels-min-aggregate.output';
import { Directus_panelsMaxAggregate } from './directus-panels-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_panels {

    @Field(() => Directus_panelsCountAggregate, {nullable:true})
    _count?: Directus_panelsCountAggregate;

    @Field(() => Directus_panelsAvgAggregate, {nullable:true})
    _avg?: Directus_panelsAvgAggregate;

    @Field(() => Directus_panelsSumAggregate, {nullable:true})
    _sum?: Directus_panelsSumAggregate;

    @Field(() => Directus_panelsMinAggregate, {nullable:true})
    _min?: Directus_panelsMinAggregate;

    @Field(() => Directus_panelsMaxAggregate, {nullable:true})
    _max?: Directus_panelsMaxAggregate;
}
