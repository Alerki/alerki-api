import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_permissionsOrderByRelevanceFieldEnum } from './directus-permissions-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_permissionsOrderByRelevanceInput {

    @Field(() => [directus_permissionsOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof directus_permissionsOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
