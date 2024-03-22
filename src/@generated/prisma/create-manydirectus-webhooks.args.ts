import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_webhooksCreateManyInput } from '../directus-webhooks/directus-webhooks-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusWebhooksArgs {

    @Field(() => [directus_webhooksCreateManyInput], {nullable:false})
    @Type(() => directus_webhooksCreateManyInput)
    data!: Array<directus_webhooksCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
