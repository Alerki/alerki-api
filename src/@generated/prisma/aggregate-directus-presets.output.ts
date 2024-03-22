import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_presetsCountAggregate } from './directus-presets-count-aggregate.output';
import { Directus_presetsAvgAggregate } from './directus-presets-avg-aggregate.output';
import { Directus_presetsSumAggregate } from './directus-presets-sum-aggregate.output';
import { Directus_presetsMinAggregate } from './directus-presets-min-aggregate.output';
import { Directus_presetsMaxAggregate } from './directus-presets-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_presets {

    @Field(() => Directus_presetsCountAggregate, {nullable:true})
    _count?: Directus_presetsCountAggregate;

    @Field(() => Directus_presetsAvgAggregate, {nullable:true})
    _avg?: Directus_presetsAvgAggregate;

    @Field(() => Directus_presetsSumAggregate, {nullable:true})
    _sum?: Directus_presetsSumAggregate;

    @Field(() => Directus_presetsMinAggregate, {nullable:true})
    _min?: Directus_presetsMinAggregate;

    @Field(() => Directus_presetsMaxAggregate, {nullable:true})
    _max?: Directus_presetsMaxAggregate;
}
