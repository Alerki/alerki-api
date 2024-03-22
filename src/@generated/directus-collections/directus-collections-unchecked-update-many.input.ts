import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';

@InputType()
export class directus_collectionsUncheckedUpdateManyInput {

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
}
