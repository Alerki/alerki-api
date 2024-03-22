import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';

@InputType()
export class directus_fieldsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    collection?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    field?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    special?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    interface?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    display?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    display_options?: any;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    readonly?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hidden?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    sort?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    width?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    translations?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    note?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    conditions?: any;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    required?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    validation?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    validation_message?: NullableStringFieldUpdateOperationsInput;
}
