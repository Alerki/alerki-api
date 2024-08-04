import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_webhooksWhereInput } from '../directus-webhooks/directus-webhooks-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusWebhooksArgs {
  @Field(() => directus_webhooksWhereInput, { nullable: true })
  @Type(() => directus_webhooksWhereInput)
  where?: directus_webhooksWhereInput;
}
