import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_permissionsCountAggregate } from './directus-permissions-count-aggregate.output';
import { Directus_permissionsAvgAggregate } from './directus-permissions-avg-aggregate.output';
import { Directus_permissionsSumAggregate } from './directus-permissions-sum-aggregate.output';
import { Directus_permissionsMinAggregate } from './directus-permissions-min-aggregate.output';
import { Directus_permissionsMaxAggregate } from './directus-permissions-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_permissions {

    @Field(() => Directus_permissionsCountAggregate, {nullable:true})
    _count?: Directus_permissionsCountAggregate;

    @Field(() => Directus_permissionsAvgAggregate, {nullable:true})
    _avg?: Directus_permissionsAvgAggregate;

    @Field(() => Directus_permissionsSumAggregate, {nullable:true})
    _sum?: Directus_permissionsSumAggregate;

    @Field(() => Directus_permissionsMinAggregate, {nullable:true})
    _min?: Directus_permissionsMinAggregate;

    @Field(() => Directus_permissionsMaxAggregate, {nullable:true})
    _max?: Directus_permissionsMaxAggregate;
}
