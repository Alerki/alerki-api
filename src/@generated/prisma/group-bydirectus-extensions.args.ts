import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_extensionsWhereInput } from '../directus-extensions/directus-extensions-where.input';
import { Type } from 'class-transformer';
import { directus_extensionsOrderByWithAggregationInput } from '../directus-extensions/directus-extensions-order-by-with-aggregation.input';
import { Directus_extensionsScalarFieldEnum } from './directus-extensions-scalar-field.enum';
import { directus_extensionsScalarWhereWithAggregatesInput } from '../directus-extensions/directus-extensions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusExtensionsArgs {
  @Field(() => directus_extensionsWhereInput, { nullable: true })
  @Type(() => directus_extensionsWhereInput)
  where?: directus_extensionsWhereInput;

  @Field(() => [directus_extensionsOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<directus_extensionsOrderByWithAggregationInput>;

  @Field(() => [Directus_extensionsScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof Directus_extensionsScalarFieldEnum>;

  @Field(() => directus_extensionsScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: directus_extensionsScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
