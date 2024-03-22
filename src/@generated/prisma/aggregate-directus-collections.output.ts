import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_collectionsCountAggregate } from './directus-collections-count-aggregate.output';
import { Directus_collectionsAvgAggregate } from './directus-collections-avg-aggregate.output';
import { Directus_collectionsSumAggregate } from './directus-collections-sum-aggregate.output';
import { Directus_collectionsMinAggregate } from './directus-collections-min-aggregate.output';
import { Directus_collectionsMaxAggregate } from './directus-collections-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_collections {

    @Field(() => Directus_collectionsCountAggregate, {nullable:true})
    _count?: Directus_collectionsCountAggregate;

    @Field(() => Directus_collectionsAvgAggregate, {nullable:true})
    _avg?: Directus_collectionsAvgAggregate;

    @Field(() => Directus_collectionsSumAggregate, {nullable:true})
    _sum?: Directus_collectionsSumAggregate;

    @Field(() => Directus_collectionsMinAggregate, {nullable:true})
    _min?: Directus_collectionsMinAggregate;

    @Field(() => Directus_collectionsMaxAggregate, {nullable:true})
    _max?: Directus_collectionsMaxAggregate;
}
