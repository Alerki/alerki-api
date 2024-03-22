import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_usersCountAggregate } from './directus-users-count-aggregate.output';
import { Directus_usersMinAggregate } from './directus-users-min-aggregate.output';
import { Directus_usersMaxAggregate } from './directus-users-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_users {

    @Field(() => Directus_usersCountAggregate, {nullable:true})
    _count?: Directus_usersCountAggregate;

    @Field(() => Directus_usersMinAggregate, {nullable:true})
    _min?: Directus_usersMinAggregate;

    @Field(() => Directus_usersMaxAggregate, {nullable:true})
    _max?: Directus_usersMaxAggregate;
}
