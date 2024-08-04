import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_webhooksWhereInput } from '../directus-webhooks/directus-webhooks-where.input';
import { Type } from 'class-transformer';
import { directus_webhooksOrderByWithRelationAndSearchRelevanceInput } from '../directus-webhooks/directus-webhooks-order-by-with-relation-and-search-relevance.input';
import { directus_webhooksWhereUniqueInput } from '../directus-webhooks/directus-webhooks-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_webhooksScalarFieldEnum } from './directus-webhooks-scalar-field.enum';

@ArgsType()
export class FindManydirectusWebhooksArgs {
  @Field(() => directus_webhooksWhereInput, { nullable: true })
  @Type(() => directus_webhooksWhereInput)
  where?: directus_webhooksWhereInput;

  @Field(() => [directus_webhooksOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<directus_webhooksOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => directus_webhooksWhereUniqueInput, { nullable: true })
  cursor?: directus_webhooksWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [Directus_webhooksScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof Directus_webhooksScalarFieldEnum>;
}
