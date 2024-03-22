import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SessionOrderByWithRelationAndSearchRelevanceInput } from '../session/session-order-by-with-relation-and-search-relevance.input';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { User_SessionOrderByRelevanceInput } from './user-session-order-by-relevance.input';

@InputType()
export class User_SessionOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    User_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    Session_id?: keyof typeof SortOrder;

    @Field(() => SessionOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    Session?: SessionOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    User?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => User_SessionOrderByRelevanceInput, {nullable:true})
    _relevance?: User_SessionOrderByRelevanceInput;
}
