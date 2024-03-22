import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';

@InputType()
export class directus_presetsUncheckedUpdateWithoutDirectus_rolesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bookmark?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    user?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    collection?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    search?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    layout?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    layout_query?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    layout_options?: any;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    refresh_interval?: NullableIntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    icon?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    color?: NullableStringFieldUpdateOperationsInput;
}
