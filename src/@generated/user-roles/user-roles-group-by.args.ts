import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRolesWhereInput } from './user-roles-where.input';
import { Type } from 'class-transformer';
import { UserRolesOrderByWithAggregationInput } from './user-roles-order-by-with-aggregation.input';
import { UserRolesScalarFieldEnum } from './user-roles-scalar-field.enum';
import { UserRolesScalarWhereWithAggregatesInput } from './user-roles-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserRolesCountAggregateInput } from './user-roles-count-aggregate.input';
import { UserRolesMinAggregateInput } from './user-roles-min-aggregate.input';
import { UserRolesMaxAggregateInput } from './user-roles-max-aggregate.input';

@ArgsType()
export class UserRolesGroupByArgs {

    @Field(() => UserRolesWhereInput, {nullable:true})
    @Type(() => UserRolesWhereInput)
    where?: UserRolesWhereInput;

    @Field(() => [UserRolesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserRolesOrderByWithAggregationInput>;

    @Field(() => [UserRolesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserRolesScalarFieldEnum>;

    @Field(() => UserRolesScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserRolesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserRolesCountAggregateInput, {nullable:true})
    _count?: UserRolesCountAggregateInput;

    @Field(() => UserRolesMinAggregateInput, {nullable:true})
    _min?: UserRolesMinAggregateInput;

    @Field(() => UserRolesMaxAggregateInput, {nullable:true})
    _max?: UserRolesMaxAggregateInput;
}
