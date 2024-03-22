import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserRolesCountAggregate } from './user-roles-count-aggregate.output';
import { UserRolesMinAggregate } from './user-roles-min-aggregate.output';
import { UserRolesMaxAggregate } from './user-roles-max-aggregate.output';

@ObjectType()
export class AggregateUserRoles {

    @Field(() => UserRolesCountAggregate, {nullable:true})
    _count?: UserRolesCountAggregate;

    @Field(() => UserRolesMinAggregate, {nullable:true})
    _min?: UserRolesMinAggregate;

    @Field(() => UserRolesMaxAggregate, {nullable:true})
    _max?: UserRolesMaxAggregate;
}
