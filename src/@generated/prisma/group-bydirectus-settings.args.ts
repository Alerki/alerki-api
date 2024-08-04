import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_settingsWhereInput } from '../directus-settings/directus-settings-where.input';
import { Type } from 'class-transformer';
import { directus_settingsOrderByWithAggregationInput } from '../directus-settings/directus-settings-order-by-with-aggregation.input';
import { Directus_settingsScalarFieldEnum } from './directus-settings-scalar-field.enum';
import { directus_settingsScalarWhereWithAggregatesInput } from '../directus-settings/directus-settings-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusSettingsArgs {
  @Field(() => directus_settingsWhereInput, { nullable: true })
  @Type(() => directus_settingsWhereInput)
  where?: directus_settingsWhereInput;

  @Field(() => [directus_settingsOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<directus_settingsOrderByWithAggregationInput>;

  @Field(() => [Directus_settingsScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof Directus_settingsScalarFieldEnum>;

  @Field(() => directus_settingsScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: directus_settingsScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
