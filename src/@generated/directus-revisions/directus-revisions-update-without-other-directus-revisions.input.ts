import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { directus_activityUpdateOneRequiredWithoutDirectus_revisionsNestedInput } from '../directus-activity/directus-activity-update-one-required-without-directus-revisions-nested.input';
import { directus_revisionsUpdateOneWithoutOther_directus_revisionsNestedInput } from './directus-revisions-update-one-without-other-directus-revisions-nested.input';
import { directus_versionsUpdateOneWithoutDirectus_revisionsNestedInput } from '../directus-versions/directus-versions-update-one-without-directus-revisions-nested.input';

@InputType()
export class directus_revisionsUpdateWithoutOther_directus_revisionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    collection?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    item?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    delta?: any;

    @Field(() => directus_activityUpdateOneRequiredWithoutDirectus_revisionsNestedInput, {nullable:true})
    directus_activity?: directus_activityUpdateOneRequiredWithoutDirectus_revisionsNestedInput;

    @Field(() => directus_revisionsUpdateOneWithoutOther_directus_revisionsNestedInput, {nullable:true})
    directus_revisions?: directus_revisionsUpdateOneWithoutOther_directus_revisionsNestedInput;

    @Field(() => directus_versionsUpdateOneWithoutDirectus_revisionsNestedInput, {nullable:true})
    directus_versions?: directus_versionsUpdateOneWithoutDirectus_revisionsNestedInput;
}
