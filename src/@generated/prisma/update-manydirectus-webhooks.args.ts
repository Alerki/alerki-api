import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_webhooksUpdateManyMutationInput } from '../directus-webhooks/directus-webhooks-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_webhooksWhereInput } from '../directus-webhooks/directus-webhooks-where.input';

@ArgsType()
export class UpdateManydirectusWebhooksArgs {
  @Field(() => directus_webhooksUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_webhooksUpdateManyMutationInput)
  data!: directus_webhooksUpdateManyMutationInput;

  @Field(() => directus_webhooksWhereInput, { nullable: true })
  @Type(() => directus_webhooksWhereInput)
  where?: directus_webhooksWhereInput;
}
