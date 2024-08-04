import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_migrationsOrderByRelevanceFieldEnum } from './directus-migrations-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_migrationsOrderByRelevanceInput {
  @Field(() => [directus_migrationsOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<keyof typeof directus_migrationsOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
