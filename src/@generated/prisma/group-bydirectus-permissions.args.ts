import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_permissionsWhereInput } from '../directus-permissions/directus-permissions-where.input';
import { Type } from 'class-transformer';
import { directus_permissionsOrderByWithAggregationInput } from '../directus-permissions/directus-permissions-order-by-with-aggregation.input';
import { Directus_permissionsScalarFieldEnum } from './directus-permissions-scalar-field.enum';
import { directus_permissionsScalarWhereWithAggregatesInput } from '../directus-permissions/directus-permissions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusPermissionsArgs {
  @Field(() => directus_permissionsWhereInput, { nullable: true })
  @Type(() => directus_permissionsWhereInput)
  where?: directus_permissionsWhereInput;

  @Field(() => [directus_permissionsOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<directus_permissionsOrderByWithAggregationInput>;

  @Field(() => [Directus_permissionsScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof Directus_permissionsScalarFieldEnum>;

  @Field(() => directus_permissionsScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: directus_permissionsScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
