import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrencyWhereInput } from './currency-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCurrencyArgs {

    @Field(() => CurrencyWhereInput, {nullable:true})
    @Type(() => CurrencyWhereInput)
    where?: CurrencyWhereInput;
}
