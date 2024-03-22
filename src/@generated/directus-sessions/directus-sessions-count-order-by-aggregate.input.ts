import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_sessionsCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_agent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    share?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    origin?: keyof typeof SortOrder;
}
