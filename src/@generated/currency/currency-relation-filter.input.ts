import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyWhereInput } from './currency-where.input';

@InputType()
export class CurrencyRelationFilter {
  @Field(() => CurrencyWhereInput, { nullable: true })
  is?: CurrencyWhereInput;

  @Field(() => CurrencyWhereInput, { nullable: true })
  isNot?: CurrencyWhereInput;
}
