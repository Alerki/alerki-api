import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_activityUpdateWithoutDirectus_revisionsInput } from './directus-activity-update-without-directus-revisions.input';
import { Type } from 'class-transformer';
import { directus_activityCreateWithoutDirectus_revisionsInput } from './directus-activity-create-without-directus-revisions.input';

@InputType()
export class directus_activityUpsertWithoutDirectus_revisionsInput {

    @Field(() => directus_activityUpdateWithoutDirectus_revisionsInput, {nullable:false})
    @Type(() => directus_activityUpdateWithoutDirectus_revisionsInput)
    update!: directus_activityUpdateWithoutDirectus_revisionsInput;

    @Field(() => directus_activityCreateWithoutDirectus_revisionsInput, {nullable:false})
    @Type(() => directus_activityCreateWithoutDirectus_revisionsInput)
    create!: directus_activityCreateWithoutDirectus_revisionsInput;
}
