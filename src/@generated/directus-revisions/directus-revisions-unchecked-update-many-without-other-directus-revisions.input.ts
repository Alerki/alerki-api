import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class directus_revisionsUncheckedUpdateManyWithoutOther_directus_revisionsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    activity?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    collection?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    item?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    delta?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    version?: NullableStringFieldUpdateOperationsInput;
}
