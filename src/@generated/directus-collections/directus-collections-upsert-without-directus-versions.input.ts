import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_collectionsUpdateWithoutDirectus_versionsInput } from './directus-collections-update-without-directus-versions.input';
import { Type } from 'class-transformer';
import { directus_collectionsCreateWithoutDirectus_versionsInput } from './directus-collections-create-without-directus-versions.input';

@InputType()
export class directus_collectionsUpsertWithoutDirectus_versionsInput {

    @Field(() => directus_collectionsUpdateWithoutDirectus_versionsInput, {nullable:false})
    @Type(() => directus_collectionsUpdateWithoutDirectus_versionsInput)
    update!: directus_collectionsUpdateWithoutDirectus_versionsInput;

    @Field(() => directus_collectionsCreateWithoutDirectus_versionsInput, {nullable:false})
    @Type(() => directus_collectionsCreateWithoutDirectus_versionsInput)
    create!: directus_collectionsCreateWithoutDirectus_versionsInput;
}
