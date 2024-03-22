import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserPictureCountAggregate } from './user-picture-count-aggregate.output';
import { UserPictureMinAggregate } from './user-picture-min-aggregate.output';
import { UserPictureMaxAggregate } from './user-picture-max-aggregate.output';

@ObjectType()
export class UserPictureGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => String, {nullable:false})
    picture!: string;

    @Field(() => UserPictureCountAggregate, {nullable:true})
    _count?: UserPictureCountAggregate;

    @Field(() => UserPictureMinAggregate, {nullable:true})
    _min?: UserPictureMinAggregate;

    @Field(() => UserPictureMaxAggregate, {nullable:true})
    _max?: UserPictureMaxAggregate;
}
