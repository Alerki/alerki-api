import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MasterScheduleCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    date_created!: number;

    @Field(() => Int, {nullable:false})
    date_updated!: number;

    @Field(() => Int, {nullable:false})
    date!: number;

    @Field(() => Int, {nullable:false})
    startTime!: number;

    @Field(() => Int, {nullable:false})
    endTime!: number;

    @Field(() => Int, {nullable:false})
    dayOff!: number;

    @Field(() => Int, {nullable:false})
    masterProfile!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
