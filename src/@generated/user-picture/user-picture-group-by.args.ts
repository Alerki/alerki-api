import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPictureWhereInput } from './user-picture-where.input';
import { Type } from 'class-transformer';
import { UserPictureOrderByWithAggregationInput } from './user-picture-order-by-with-aggregation.input';
import { UserPictureScalarFieldEnum } from './user-picture-scalar-field.enum';
import { UserPictureScalarWhereWithAggregatesInput } from './user-picture-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserPictureCountAggregateInput } from './user-picture-count-aggregate.input';
import { UserPictureMinAggregateInput } from './user-picture-min-aggregate.input';
import { UserPictureMaxAggregateInput } from './user-picture-max-aggregate.input';

@ArgsType()
export class UserPictureGroupByArgs {

    @Field(() => UserPictureWhereInput, {nullable:true})
    @Type(() => UserPictureWhereInput)
    where?: UserPictureWhereInput;

    @Field(() => [UserPictureOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserPictureOrderByWithAggregationInput>;

    @Field(() => [UserPictureScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserPictureScalarFieldEnum>;

    @Field(() => UserPictureScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserPictureScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserPictureCountAggregateInput, {nullable:true})
    _count?: UserPictureCountAggregateInput;

    @Field(() => UserPictureMinAggregateInput, {nullable:true})
    _min?: UserPictureMinAggregateInput;

    @Field(() => UserPictureMaxAggregateInput, {nullable:true})
    _max?: UserPictureMaxAggregateInput;
}
