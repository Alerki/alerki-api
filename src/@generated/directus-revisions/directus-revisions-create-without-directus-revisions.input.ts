import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { directus_activityCreateNestedOneWithoutDirectus_revisionsInput } from '../directus-activity/directus-activity-create-nested-one-without-directus-revisions.input';
import { directus_revisionsCreateNestedManyWithoutDirectus_revisionsInput } from './directus-revisions-create-nested-many-without-directus-revisions.input';
import { directus_versionsCreateNestedOneWithoutDirectus_revisionsInput } from '../directus-versions/directus-versions-create-nested-one-without-directus-revisions.input';

@InputType()
export class directus_revisionsCreateWithoutDirectus_revisionsInput {

    @Field(() => String, {nullable:false})
    collection!: string;

    @Field(() => String, {nullable:false})
    item!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    delta?: any;

    @Field(() => directus_activityCreateNestedOneWithoutDirectus_revisionsInput, {nullable:false})
    directus_activity!: directus_activityCreateNestedOneWithoutDirectus_revisionsInput;

    @Field(() => directus_revisionsCreateNestedManyWithoutDirectus_revisionsInput, {nullable:true})
    other_directus_revisions?: directus_revisionsCreateNestedManyWithoutDirectus_revisionsInput;

    @Field(() => directus_versionsCreateNestedOneWithoutDirectus_revisionsInput, {nullable:true})
    directus_versions?: directus_versionsCreateNestedOneWithoutDirectus_revisionsInput;
}
