import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrencyCreateInput } from './currency-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCurrencyArgs {

    @Field(() => CurrencyCreateInput, {nullable:false})
    @Type(() => CurrencyCreateInput)
    data!: CurrencyCreateInput;
}
