import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CurrencyAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    sort?: keyof typeof SortOrder;
}
