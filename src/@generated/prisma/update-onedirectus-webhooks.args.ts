import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_webhooksUpdateInput } from '../directus-webhooks/directus-webhooks-update.input';
import { Type } from 'class-transformer';
import { directus_webhooksWhereUniqueInput } from '../directus-webhooks/directus-webhooks-where-unique.input';

@ArgsType()
export class UpdateOnedirectusWebhooksArgs {
  @Field(() => directus_webhooksUpdateInput, { nullable: false })
  @Type(() => directus_webhooksUpdateInput)
  data!: directus_webhooksUpdateInput;

  @Field(() => directus_webhooksWhereUniqueInput, { nullable: false })
  @Type(() => directus_webhooksWhereUniqueInput)
  where!: directus_webhooksWhereUniqueInput;
}
