import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MasterProfileCountAggregate } from './master-profile-count-aggregate.output';
import { MasterProfileMinAggregate } from './master-profile-min-aggregate.output';
import { MasterProfileMaxAggregate } from './master-profile-max-aggregate.output';

@ObjectType()
export class AggregateMasterProfile {

    @Field(() => MasterProfileCountAggregate, {nullable:true})
    _count?: MasterProfileCountAggregate;

    @Field(() => MasterProfileMinAggregate, {nullable:true})
    _min?: MasterProfileMinAggregate;

    @Field(() => MasterProfileMaxAggregate, {nullable:true})
    _max?: MasterProfileMaxAggregate;
}
