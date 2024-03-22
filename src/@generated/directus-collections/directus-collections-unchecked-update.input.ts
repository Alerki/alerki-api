import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { directus_collectionsUncheckedUpdateManyWithoutDirectus_collectionsNestedInput } from './directus-collections-unchecked-update-many-without-directus-collections-nested.input';
import { directus_sharesUncheckedUpdateManyWithoutDirectus_collectionsNestedInput } from '../directus-shares/directus-shares-unchecked-update-many-without-directus-collections-nested.input';
import { directus_versionsUncheckedUpdateManyWithoutDirectus_collectionsNestedInput } from '../directus-versions/directus-versions-unchecked-update-many-without-directus-collections-nested.input';

@InputType()
export class directus_collectionsUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    collection?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    icon?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    note?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    display_template?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hidden?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    singleton?: BoolFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    translations?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    archive_field?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    archive_app_filter?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    archive_value?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    unarchive_value?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sort_field?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    accountability?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    color?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    item_duplication_fields?: any;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    sort?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    collapse?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    preview_url?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    versioning?: BoolFieldUpdateOperationsInput;

    @Field(() => directus_collectionsUncheckedUpdateManyWithoutDirectus_collectionsNestedInput, {nullable:true})
    other_directus_collections?: directus_collectionsUncheckedUpdateManyWithoutDirectus_collectionsNestedInput;

    @Field(() => directus_sharesUncheckedUpdateManyWithoutDirectus_collectionsNestedInput, {nullable:true})
    directus_shares?: directus_sharesUncheckedUpdateManyWithoutDirectus_collectionsNestedInput;

    @Field(() => directus_versionsUncheckedUpdateManyWithoutDirectus_collectionsNestedInput, {nullable:true})
    directus_versions?: directus_versionsUncheckedUpdateManyWithoutDirectus_collectionsNestedInput;
}
