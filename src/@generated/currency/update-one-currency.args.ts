import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrencyUpdateInput } from './currency-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';

@ArgsType()
export class UpdateOneCurrencyArgs {

    @Field(() => CurrencyUpdateInput, {nullable:false})
    @Type(() => CurrencyUpdateInput)
    data!: CurrencyUpdateInput;

    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    @Type(() => CurrencyWhereUniqueInput)
    where!: Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>;
}
