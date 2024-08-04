import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CurrencyAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  sort?: true;
}
