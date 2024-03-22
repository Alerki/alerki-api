import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_collectionsWhereInput } from '../directus-collections/directus-collections-where.input';
import { Type } from 'class-transformer';
import { directus_collectionsOrderByWithAggregationInput } from '../directus-collections/directus-collections-order-by-with-aggregation.input';
import { Directus_collectionsScalarFieldEnum } from './directus-collections-scalar-field.enum';
import { directus_collectionsScalarWhereWithAggregatesInput } from '../directus-collections/directus-collections-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusCollectionsArgs {

    @Field(() => directus_collectionsWhereInput, {nullable:true})
    @Type(() => directus_collectionsWhereInput)
    where?: directus_collectionsWhereInput;

    @Field(() => [directus_collectionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<directus_collectionsOrderByWithAggregationInput>;

    @Field(() => [Directus_collectionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Directus_collectionsScalarFieldEnum>;

    @Field(() => directus_collectionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: directus_collectionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
