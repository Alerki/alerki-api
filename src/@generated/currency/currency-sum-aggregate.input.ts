import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CurrencySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    sort?: true;
}
