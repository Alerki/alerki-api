import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_webhooksWhereInput } from '../directus-webhooks/directus-webhooks-where.input';
import { Type } from 'class-transformer';
import { directus_webhooksOrderByWithAggregationInput } from '../directus-webhooks/directus-webhooks-order-by-with-aggregation.input';
import { Directus_webhooksScalarFieldEnum } from './directus-webhooks-scalar-field.enum';
import { directus_webhooksScalarWhereWithAggregatesInput } from '../directus-webhooks/directus-webhooks-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusWebhooksArgs {
  @Field(() => directus_webhooksWhereInput, { nullable: true })
  @Type(() => directus_webhooksWhereInput)
  where?: directus_webhooksWhereInput;

  @Field(() => [directus_webhooksOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<directus_webhooksOrderByWithAggregationInput>;

  @Field(() => [Directus_webhooksScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof Directus_webhooksScalarFieldEnum>;

  @Field(() => directus_webhooksScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: directus_webhooksScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
