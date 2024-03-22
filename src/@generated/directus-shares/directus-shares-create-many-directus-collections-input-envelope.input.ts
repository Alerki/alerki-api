import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sharesCreateManyDirectus_collectionsInput } from './directus-shares-create-many-directus-collections.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_sharesCreateManyDirectus_collectionsInputEnvelope {

    @Field(() => [directus_sharesCreateManyDirectus_collectionsInput], {nullable:false})
    @Type(() => directus_sharesCreateManyDirectus_collectionsInput)
    data!: Array<directus_sharesCreateManyDirectus_collectionsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
