import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_versionsWhereInput } from '../directus-versions/directus-versions-where.input';
import { Type } from 'class-transformer';
import { directus_versionsOrderByWithAggregationInput } from '../directus-versions/directus-versions-order-by-with-aggregation.input';
import { Directus_versionsScalarFieldEnum } from './directus-versions-scalar-field.enum';
import { directus_versionsScalarWhereWithAggregatesInput } from '../directus-versions/directus-versions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusVersionsArgs {

    @Field(() => directus_versionsWhereInput, {nullable:true})
    @Type(() => directus_versionsWhereInput)
    where?: directus_versionsWhereInput;

    @Field(() => [directus_versionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<directus_versionsOrderByWithAggregationInput>;

    @Field(() => [Directus_versionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Directus_versionsScalarFieldEnum>;

    @Field(() => directus_versionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: directus_versionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
