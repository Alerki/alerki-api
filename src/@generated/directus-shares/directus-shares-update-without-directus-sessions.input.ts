import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { directus_collectionsUpdateOneRequiredWithoutDirectus_sharesNestedInput } from '../directus-collections/directus-collections-update-one-required-without-directus-shares-nested.input';
import { directus_rolesUpdateOneWithoutDirectus_sharesNestedInput } from '../directus-roles/directus-roles-update-one-without-directus-shares-nested.input';
import { directus_usersUpdateOneWithoutDirectus_sharesNestedInput } from '../directus-users/directus-users-update-one-without-directus-shares-nested.input';

@InputType()
export class directus_sharesUpdateWithoutDirectus_sessionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    item?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_created?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_start?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_end?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    times_used?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    max_uses?: NullableIntFieldUpdateOperationsInput;

    @Field(() => directus_collectionsUpdateOneRequiredWithoutDirectus_sharesNestedInput, {nullable:true})
    directus_collections?: directus_collectionsUpdateOneRequiredWithoutDirectus_sharesNestedInput;

    @Field(() => directus_rolesUpdateOneWithoutDirectus_sharesNestedInput, {nullable:true})
    directus_roles?: directus_rolesUpdateOneWithoutDirectus_sharesNestedInput;

    @Field(() => directus_usersUpdateOneWithoutDirectus_sharesNestedInput, {nullable:true})
    directus_users?: directus_usersUpdateOneWithoutDirectus_sharesNestedInput;
}
