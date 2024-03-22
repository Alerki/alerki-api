import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesOrderByRelevanceFieldEnum } from './directus-files-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_filesOrderByRelevanceInput {

    @Field(() => [directus_filesOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof directus_filesOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
