import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_rolesMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  icon?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  ip_access?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  enforce_tfa?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  admin_access?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  app_access?: keyof typeof SortOrder;
}
