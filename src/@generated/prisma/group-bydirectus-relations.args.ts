import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_relationsWhereInput } from '../directus-relations/directus-relations-where.input';
import { Type } from 'class-transformer';
import { directus_relationsOrderByWithAggregationInput } from '../directus-relations/directus-relations-order-by-with-aggregation.input';
import { Directus_relationsScalarFieldEnum } from './directus-relations-scalar-field.enum';
import { directus_relationsScalarWhereWithAggregatesInput } from '../directus-relations/directus-relations-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusRelationsArgs {
  @Field(() => directus_relationsWhereInput, { nullable: true })
  @Type(() => directus_relationsWhereInput)
  where?: directus_relationsWhereInput;

  @Field(() => [directus_relationsOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<directus_relationsOrderByWithAggregationInput>;

  @Field(() => [Directus_relationsScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof Directus_relationsScalarFieldEnum>;

  @Field(() => directus_relationsScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: directus_relationsScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
