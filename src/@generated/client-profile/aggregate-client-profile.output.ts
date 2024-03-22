import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClientProfileCountAggregate } from './client-profile-count-aggregate.output';
import { ClientProfileMinAggregate } from './client-profile-min-aggregate.output';
import { ClientProfileMaxAggregate } from './client-profile-max-aggregate.output';

@ObjectType()
export class AggregateClientProfile {

    @Field(() => ClientProfileCountAggregate, {nullable:true})
    _count?: ClientProfileCountAggregate;

    @Field(() => ClientProfileMinAggregate, {nullable:true})
    _min?: ClientProfileMinAggregate;

    @Field(() => ClientProfileMaxAggregate, {nullable:true})
    _max?: ClientProfileMaxAggregate;
}
