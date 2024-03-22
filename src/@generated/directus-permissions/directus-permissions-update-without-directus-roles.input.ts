import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class directus_permissionsUpdateWithoutDirectus_rolesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    collection?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    action?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    permissions?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    validation?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    presets?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    fields?: NullableStringFieldUpdateOperationsInput;
}
