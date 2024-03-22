import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_sessionsCountAggregate } from './directus-sessions-count-aggregate.output';
import { Directus_sessionsMinAggregate } from './directus-sessions-min-aggregate.output';
import { Directus_sessionsMaxAggregate } from './directus-sessions-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_sessions {

    @Field(() => Directus_sessionsCountAggregate, {nullable:true})
    _count?: Directus_sessionsCountAggregate;

    @Field(() => Directus_sessionsMinAggregate, {nullable:true})
    _min?: Directus_sessionsMinAggregate;

    @Field(() => Directus_sessionsMaxAggregate, {nullable:true})
    _max?: Directus_sessionsMaxAggregate;
}
