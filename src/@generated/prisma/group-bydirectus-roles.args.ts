import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_rolesWhereInput } from '../directus-roles/directus-roles-where.input';
import { Type } from 'class-transformer';
import { directus_rolesOrderByWithAggregationInput } from '../directus-roles/directus-roles-order-by-with-aggregation.input';
import { Directus_rolesScalarFieldEnum } from './directus-roles-scalar-field.enum';
import { directus_rolesScalarWhereWithAggregatesInput } from '../directus-roles/directus-roles-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusRolesArgs {

    @Field(() => directus_rolesWhereInput, {nullable:true})
    @Type(() => directus_rolesWhereInput)
    where?: directus_rolesWhereInput;

    @Field(() => [directus_rolesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<directus_rolesOrderByWithAggregationInput>;

    @Field(() => [Directus_rolesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Directus_rolesScalarFieldEnum>;

    @Field(() => directus_rolesScalarWhereWithAggregatesInput, {nullable:true})
    having?: directus_rolesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
