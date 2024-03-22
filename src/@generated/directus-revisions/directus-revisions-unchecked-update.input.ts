import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { directus_revisionsUncheckedUpdateManyWithoutDirectus_revisionsNestedInput } from './directus-revisions-unchecked-update-many-without-directus-revisions-nested.input';

@InputType()
export class directus_revisionsUncheckedUpdateInput {

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

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    parent?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    version?: NullableStringFieldUpdateOperationsInput;

    @Field(() => directus_revisionsUncheckedUpdateManyWithoutDirectus_revisionsNestedInput, {nullable:true})
    other_directus_revisions?: directus_revisionsUncheckedUpdateManyWithoutDirectus_revisionsNestedInput;
}
