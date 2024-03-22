import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MasterProfileCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    date_created!: number;

    @Field(() => Int, {nullable:false})
    date_updated!: number;

    @Field(() => Int, {nullable:false})
    masterWeeklySchedule!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
