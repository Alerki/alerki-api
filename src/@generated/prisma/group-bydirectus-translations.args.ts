import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_translationsWhereInput } from '../directus-translations/directus-translations-where.input';
import { Type } from 'class-transformer';
import { directus_translationsOrderByWithAggregationInput } from '../directus-translations/directus-translations-order-by-with-aggregation.input';
import { Directus_translationsScalarFieldEnum } from './directus-translations-scalar-field.enum';
import { directus_translationsScalarWhereWithAggregatesInput } from '../directus-translations/directus-translations-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusTranslationsArgs {

    @Field(() => directus_translationsWhereInput, {nullable:true})
    @Type(() => directus_translationsWhereInput)
    where?: directus_translationsWhereInput;

    @Field(() => [directus_translationsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<directus_translationsOrderByWithAggregationInput>;

    @Field(() => [Directus_translationsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Directus_translationsScalarFieldEnum>;

    @Field(() => directus_translationsScalarWhereWithAggregatesInput, {nullable:true})
    having?: directus_translationsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
