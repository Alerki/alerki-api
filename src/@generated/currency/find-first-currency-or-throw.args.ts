import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrencyWhereInput } from './currency-where.input';
import { Type } from 'class-transformer';
import { CurrencyOrderByWithRelationAndSearchRelevanceInput } from './currency-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CurrencyScalarFieldEnum } from './currency-scalar-field.enum';

@ArgsType()
export class FindFirstCurrencyOrThrowArgs {
  @Field(() => CurrencyWhereInput, { nullable: true })
  @Type(() => CurrencyWhereInput)
  where?: CurrencyWhereInput;

  @Field(() => [CurrencyOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<CurrencyOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => CurrencyWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [CurrencyScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof CurrencyScalarFieldEnum>;
}
