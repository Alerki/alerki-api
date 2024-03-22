import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { directus_filesOrderByWithRelationAndSearchRelevanceInput } from '../directus-files/directus-files-order-by-with-relation-and-search-relevance.input';
import { UserPictureOrderByRelevanceInput } from './user-picture-order-by-relevance.input';

@InputType()
export class UserPictureOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_updated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    picture?: keyof typeof SortOrder;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    User?: UserOrderByRelationAggregateInput;

    @Field(() => directus_filesOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_files?: directus_filesOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => UserPictureOrderByRelevanceInput, {nullable:true})
    _relevance?: UserPictureOrderByRelevanceInput;
}
