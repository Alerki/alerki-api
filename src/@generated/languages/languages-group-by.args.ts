import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { languagesWhereInput } from './languages-where.input';
import { Type } from 'class-transformer';
import { languagesOrderByWithAggregationInput } from './languages-order-by-with-aggregation.input';
import { LanguagesScalarFieldEnum } from '../prisma/languages-scalar-field.enum';
import { languagesScalarWhereWithAggregatesInput } from './languages-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class languagesGroupByArgs {

    @Field(() => languagesWhereInput, {nullable:true})
    @Type(() => languagesWhereInput)
    where?: languagesWhereInput;

    @Field(() => [languagesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<languagesOrderByWithAggregationInput>;

    @Field(() => [LanguagesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LanguagesScalarFieldEnum>;

    @Field(() => languagesScalarWhereWithAggregatesInput, {nullable:true})
    having?: languagesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
