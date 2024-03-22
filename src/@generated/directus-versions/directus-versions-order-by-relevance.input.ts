import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_versionsOrderByRelevanceFieldEnum } from './directus-versions-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_versionsOrderByRelevanceInput {

    @Field(() => [directus_versionsOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof directus_versionsOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
