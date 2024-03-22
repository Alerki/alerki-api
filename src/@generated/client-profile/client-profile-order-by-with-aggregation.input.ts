import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClientProfileCountOrderByAggregateInput } from './client-profile-count-order-by-aggregate.input';
import { ClientProfileMaxOrderByAggregateInput } from './client-profile-max-order-by-aggregate.input';
import { ClientProfileMinOrderByAggregateInput } from './client-profile-min-order-by-aggregate.input';

@InputType()
export class ClientProfileOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_updated?: keyof typeof SortOrder;

    @Field(() => ClientProfileCountOrderByAggregateInput, {nullable:true})
    _count?: ClientProfileCountOrderByAggregateInput;

    @Field(() => ClientProfileMaxOrderByAggregateInput, {nullable:true})
    _max?: ClientProfileMaxOrderByAggregateInput;

    @Field(() => ClientProfileMinOrderByAggregateInput, {nullable:true})
    _min?: ClientProfileMinOrderByAggregateInput;
}
