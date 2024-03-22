import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AppointmentCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    date_created!: number;

    @Field(() => Int, {nullable:false})
    date_updated!: number;

    @Field(() => Int, {nullable:false})
    masterService!: number;

    @Field(() => Int, {nullable:false})
    clientProfile!: number;

    @Field(() => Int, {nullable:false})
    masterProfile!: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    currency!: number;

    @Field(() => Int, {nullable:false})
    startAt!: number;

    @Field(() => Int, {nullable:false})
    endAt!: number;

    @Field(() => Int, {nullable:false})
    confirmed!: number;

    @Field(() => Int, {nullable:false})
    cancelled!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
