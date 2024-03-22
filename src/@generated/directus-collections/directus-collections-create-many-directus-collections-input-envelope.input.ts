import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_collectionsCreateManyDirectus_collectionsInput } from './directus-collections-create-many-directus-collections.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_collectionsCreateManyDirectus_collectionsInputEnvelope {

    @Field(() => [directus_collectionsCreateManyDirectus_collectionsInput], {nullable:false})
    @Type(() => directus_collectionsCreateManyDirectus_collectionsInput)
    data!: Array<directus_collectionsCreateManyDirectus_collectionsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
