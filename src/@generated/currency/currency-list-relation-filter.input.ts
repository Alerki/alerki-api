import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyWhereInput } from './currency-where.input';

@InputType()
export class CurrencyListRelationFilter {

    @Field(() => CurrencyWhereInput, {nullable:true})
    every?: CurrencyWhereInput;

    @Field(() => CurrencyWhereInput, {nullable:true})
    some?: CurrencyWhereInput;

    @Field(() => CurrencyWhereInput, {nullable:true})
    none?: CurrencyWhereInput;
}
