import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Service_translationsWhereInput } from '../service-translations/service-translations-where.input';
import { Type } from 'class-transformer';
import { Service_translationsOrderByWithAggregationInput } from '../service-translations/service-translations-order-by-with-aggregation.input';
import { Service_translationsScalarFieldEnum } from '../service-translations/service-translations-scalar-field.enum';
import { Service_translationsScalarWhereWithAggregatesInput } from '../service-translations/service-translations-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByServiceTranslationsArgs {

    @Field(() => Service_translationsWhereInput, {nullable:true})
    @Type(() => Service_translationsWhereInput)
    where?: Service_translationsWhereInput;

    @Field(() => [Service_translationsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<Service_translationsOrderByWithAggregationInput>;

    @Field(() => [Service_translationsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Service_translationsScalarFieldEnum>;

    @Field(() => Service_translationsScalarWhereWithAggregatesInput, {nullable:true})
    having?: Service_translationsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
