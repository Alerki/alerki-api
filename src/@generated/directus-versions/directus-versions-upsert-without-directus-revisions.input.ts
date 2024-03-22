import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_versionsUpdateWithoutDirectus_revisionsInput } from './directus-versions-update-without-directus-revisions.input';
import { Type } from 'class-transformer';
import { directus_versionsCreateWithoutDirectus_revisionsInput } from './directus-versions-create-without-directus-revisions.input';

@InputType()
export class directus_versionsUpsertWithoutDirectus_revisionsInput {

    @Field(() => directus_versionsUpdateWithoutDirectus_revisionsInput, {nullable:false})
    @Type(() => directus_versionsUpdateWithoutDirectus_revisionsInput)
    update!: directus_versionsUpdateWithoutDirectus_revisionsInput;

    @Field(() => directus_versionsCreateWithoutDirectus_revisionsInput, {nullable:false})
    @Type(() => directus_versionsCreateWithoutDirectus_revisionsInput)
    create!: directus_versionsCreateWithoutDirectus_revisionsInput;
}
