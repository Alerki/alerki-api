import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_revisionsCountAggregate } from './directus-revisions-count-aggregate.output';
import { Directus_revisionsAvgAggregate } from './directus-revisions-avg-aggregate.output';
import { Directus_revisionsSumAggregate } from './directus-revisions-sum-aggregate.output';
import { Directus_revisionsMinAggregate } from './directus-revisions-min-aggregate.output';
import { Directus_revisionsMaxAggregate } from './directus-revisions-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_revisions {

    @Field(() => Directus_revisionsCountAggregate, {nullable:true})
    _count?: Directus_revisionsCountAggregate;

    @Field(() => Directus_revisionsAvgAggregate, {nullable:true})
    _avg?: Directus_revisionsAvgAggregate;

    @Field(() => Directus_revisionsSumAggregate, {nullable:true})
    _sum?: Directus_revisionsSumAggregate;

    @Field(() => Directus_revisionsMinAggregate, {nullable:true})
    _min?: Directus_revisionsMinAggregate;

    @Field(() => Directus_revisionsMaxAggregate, {nullable:true})
    _max?: Directus_revisionsMaxAggregate;
}
