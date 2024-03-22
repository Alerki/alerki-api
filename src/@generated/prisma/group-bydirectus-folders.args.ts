import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_foldersWhereInput } from '../directus-folders/directus-folders-where.input';
import { Type } from 'class-transformer';
import { directus_foldersOrderByWithAggregationInput } from '../directus-folders/directus-folders-order-by-with-aggregation.input';
import { Directus_foldersScalarFieldEnum } from './directus-folders-scalar-field.enum';
import { directus_foldersScalarWhereWithAggregatesInput } from '../directus-folders/directus-folders-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusFoldersArgs {

    @Field(() => directus_foldersWhereInput, {nullable:true})
    @Type(() => directus_foldersWhereInput)
    where?: directus_foldersWhereInput;

    @Field(() => [directus_foldersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<directus_foldersOrderByWithAggregationInput>;

    @Field(() => [Directus_foldersScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Directus_foldersScalarFieldEnum>;

    @Field(() => directus_foldersScalarWhereWithAggregatesInput, {nullable:true})
    having?: directus_foldersScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
