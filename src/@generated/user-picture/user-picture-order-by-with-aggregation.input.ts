import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserPictureCountOrderByAggregateInput } from './user-picture-count-order-by-aggregate.input';
import { UserPictureMaxOrderByAggregateInput } from './user-picture-max-order-by-aggregate.input';
import { UserPictureMinOrderByAggregateInput } from './user-picture-min-order-by-aggregate.input';

@InputType()
export class UserPictureOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_updated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    picture?: keyof typeof SortOrder;

    @Field(() => UserPictureCountOrderByAggregateInput, {nullable:true})
    _count?: UserPictureCountOrderByAggregateInput;

    @Field(() => UserPictureMaxOrderByAggregateInput, {nullable:true})
    _max?: UserPictureMaxOrderByAggregateInput;

    @Field(() => UserPictureMinOrderByAggregateInput, {nullable:true})
    _min?: UserPictureMinOrderByAggregateInput;
}
