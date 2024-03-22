import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_filesWhereInput } from '../directus-files/directus-files-where.input';
import { Type } from 'class-transformer';
import { directus_filesOrderByWithAggregationInput } from '../directus-files/directus-files-order-by-with-aggregation.input';
import { Directus_filesScalarFieldEnum } from './directus-files-scalar-field.enum';
import { directus_filesScalarWhereWithAggregatesInput } from '../directus-files/directus-files-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusFilesArgs {

    @Field(() => directus_filesWhereInput, {nullable:true})
    @Type(() => directus_filesWhereInput)
    where?: directus_filesWhereInput;

    @Field(() => [directus_filesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<directus_filesOrderByWithAggregationInput>;

    @Field(() => [Directus_filesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Directus_filesScalarFieldEnum>;

    @Field(() => directus_filesScalarWhereWithAggregatesInput, {nullable:true})
    having?: directus_filesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
