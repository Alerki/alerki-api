import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersOrderByRelevanceFieldEnum } from './directus-users-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_usersOrderByRelevanceInput {

    @Field(() => [directus_usersOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof directus_usersOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
