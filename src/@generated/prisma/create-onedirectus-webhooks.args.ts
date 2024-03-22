import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_webhooksCreateInput } from '../directus-webhooks/directus-webhooks-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusWebhooksArgs {

    @Field(() => directus_webhooksCreateInput, {nullable:false})
    @Type(() => directus_webhooksCreateInput)
    data!: directus_webhooksCreateInput;
}
