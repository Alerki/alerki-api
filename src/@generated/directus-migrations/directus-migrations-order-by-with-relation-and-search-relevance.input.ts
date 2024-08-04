import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_migrationsOrderByRelevanceInput } from './directus-migrations-order-by-relevance.input';

@InputType()
export class directus_migrationsOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  version?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  timestamp?: keyof typeof SortOrder;

  @Field(() => directus_migrationsOrderByRelevanceInput, { nullable: true })
  _relevance?: directus_migrationsOrderByRelevanceInput;
}
