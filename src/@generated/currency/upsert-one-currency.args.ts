import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { Type } from 'class-transformer';
import { CurrencyCreateInput } from './currency-create.input';
import { CurrencyUpdateInput } from './currency-update.input';

@ArgsType()
export class UpsertOneCurrencyArgs {

    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    @Type(() => CurrencyWhereUniqueInput)
    where!: Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>;

    @Field(() => CurrencyCreateInput, {nullable:false})
    @Type(() => CurrencyCreateInput)
    create!: CurrencyCreateInput;

    @Field(() => CurrencyUpdateInput, {nullable:false})
    @Type(() => CurrencyUpdateInput)
    update!: CurrencyUpdateInput;
}
