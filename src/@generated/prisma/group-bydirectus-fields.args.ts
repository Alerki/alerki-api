import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_fieldsWhereInput } from '../directus-fields/directus-fields-where.input';
import { Type } from 'class-transformer';
import { directus_fieldsOrderByWithAggregationInput } from '../directus-fields/directus-fields-order-by-with-aggregation.input';
import { Directus_fieldsScalarFieldEnum } from './directus-fields-scalar-field.enum';
import { directus_fieldsScalarWhereWithAggregatesInput } from '../directus-fields/directus-fields-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusFieldsArgs {

    @Field(() => directus_fieldsWhereInput, {nullable:true})
    @Type(() => directus_fieldsWhereInput)
    where?: directus_fieldsWhereInput;

    @Field(() => [directus_fieldsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<directus_fieldsOrderByWithAggregationInput>;

    @Field(() => [Directus_fieldsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Directus_fieldsScalarFieldEnum>;

    @Field(() => directus_fieldsScalarWhereWithAggregatesInput, {nullable:true})
    having?: directus_fieldsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
