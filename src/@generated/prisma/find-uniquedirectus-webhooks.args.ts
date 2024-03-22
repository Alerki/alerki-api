import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_webhooksWhereUniqueInput } from '../directus-webhooks/directus-webhooks-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedirectusWebhooksArgs {

    @Field(() => directus_webhooksWhereUniqueInput, {nullable:false})
    @Type(() => directus_webhooksWhereUniqueInput)
    where!: directus_webhooksWhereUniqueInput;
}
