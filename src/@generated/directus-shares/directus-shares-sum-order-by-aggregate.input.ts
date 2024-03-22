import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_sharesSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    times_used?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_uses?: keyof typeof SortOrder;
}
