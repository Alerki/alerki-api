import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_usersWhereInput } from '../directus-users/directus-users-where.input';
import { Type } from 'class-transformer';
import { directus_usersOrderByWithAggregationInput } from '../directus-users/directus-users-order-by-with-aggregation.input';
import { Directus_usersScalarFieldEnum } from './directus-users-scalar-field.enum';
import { directus_usersScalarWhereWithAggregatesInput } from '../directus-users/directus-users-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusUsersArgs {

    @Field(() => directus_usersWhereInput, {nullable:true})
    @Type(() => directus_usersWhereInput)
    where?: directus_usersWhereInput;

    @Field(() => [directus_usersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<directus_usersOrderByWithAggregationInput>;

    @Field(() => [Directus_usersScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Directus_usersScalarFieldEnum>;

    @Field(() => directus_usersScalarWhereWithAggregatesInput, {nullable:true})
    having?: directus_usersScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
