import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_migrationsCountOrderByAggregateInput } from './directus-migrations-count-order-by-aggregate.input';
import { directus_migrationsMaxOrderByAggregateInput } from './directus-migrations-max-order-by-aggregate.input';
import { directus_migrationsMinOrderByAggregateInput } from './directus-migrations-min-order-by-aggregate.input';

@InputType()
export class directus_migrationsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  version?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  timestamp?: keyof typeof SortOrder;

  @Field(() => directus_migrationsCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: directus_migrationsCountOrderByAggregateInput;

  @Field(() => directus_migrationsMaxOrderByAggregateInput, { nullable: true })
  _max?: directus_migrationsMaxOrderByAggregateInput;

  @Field(() => directus_migrationsMinOrderByAggregateInput, { nullable: true })
  _min?: directus_migrationsMinOrderByAggregateInput;
}
