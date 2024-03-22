import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_presetsWhereInput } from '../directus-presets/directus-presets-where.input';
import { Type } from 'class-transformer';
import { directus_presetsOrderByWithAggregationInput } from '../directus-presets/directus-presets-order-by-with-aggregation.input';
import { Directus_presetsScalarFieldEnum } from './directus-presets-scalar-field.enum';
import { directus_presetsScalarWhereWithAggregatesInput } from '../directus-presets/directus-presets-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusPresetsArgs {

    @Field(() => directus_presetsWhereInput, {nullable:true})
    @Type(() => directus_presetsWhereInput)
    where?: directus_presetsWhereInput;

    @Field(() => [directus_presetsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<directus_presetsOrderByWithAggregationInput>;

    @Field(() => [Directus_presetsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Directus_presetsScalarFieldEnum>;

    @Field(() => directus_presetsScalarWhereWithAggregatesInput, {nullable:true})
    having?: directus_presetsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
