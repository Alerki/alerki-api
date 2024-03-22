import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_rolesOrderByRelevanceFieldEnum } from './directus-roles-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_rolesOrderByRelevanceInput {

    @Field(() => [directus_rolesOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof directus_rolesOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
