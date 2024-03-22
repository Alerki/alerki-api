import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_sharesMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    collection?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    item?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_start?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_end?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    times_used?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_uses?: keyof typeof SortOrder;
}
