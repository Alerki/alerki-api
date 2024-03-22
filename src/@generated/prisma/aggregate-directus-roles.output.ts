import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_rolesCountAggregate } from './directus-roles-count-aggregate.output';
import { Directus_rolesMinAggregate } from './directus-roles-min-aggregate.output';
import { Directus_rolesMaxAggregate } from './directus-roles-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_roles {

    @Field(() => Directus_rolesCountAggregate, {nullable:true})
    _count?: Directus_rolesCountAggregate;

    @Field(() => Directus_rolesMinAggregate, {nullable:true})
    _min?: Directus_rolesMinAggregate;

    @Field(() => Directus_rolesMaxAggregate, {nullable:true})
    _max?: Directus_rolesMaxAggregate;
}
