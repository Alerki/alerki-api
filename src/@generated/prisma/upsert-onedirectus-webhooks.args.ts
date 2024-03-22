import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_webhooksWhereUniqueInput } from '../directus-webhooks/directus-webhooks-where-unique.input';
import { Type } from 'class-transformer';
import { directus_webhooksCreateInput } from '../directus-webhooks/directus-webhooks-create.input';
import { directus_webhooksUpdateInput } from '../directus-webhooks/directus-webhooks-update.input';

@ArgsType()
export class UpsertOnedirectusWebhooksArgs {

    @Field(() => directus_webhooksWhereUniqueInput, {nullable:false})
    @Type(() => directus_webhooksWhereUniqueInput)
    where!: directus_webhooksWhereUniqueInput;

    @Field(() => directus_webhooksCreateInput, {nullable:false})
    @Type(() => directus_webhooksCreateInput)
    create!: directus_webhooksCreateInput;

    @Field(() => directus_webhooksUpdateInput, {nullable:false})
    @Type(() => directus_webhooksUpdateInput)
    update!: directus_webhooksUpdateInput;
}
