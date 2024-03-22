import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class NotificationMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_updated?: keyof typeof SortOrder;
}
