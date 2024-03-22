import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCurrencyOrThrowArgs {

    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    @Type(() => CurrencyWhereUniqueInput)
    where!: Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>;
}
