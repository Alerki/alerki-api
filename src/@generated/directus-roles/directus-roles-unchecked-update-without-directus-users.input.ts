import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { directus_permissionsUncheckedUpdateManyWithoutDirectus_rolesNestedInput } from '../directus-permissions/directus-permissions-unchecked-update-many-without-directus-roles-nested.input';
import { directus_presetsUncheckedUpdateManyWithoutDirectus_rolesNestedInput } from '../directus-presets/directus-presets-unchecked-update-many-without-directus-roles-nested.input';
import { directus_sharesUncheckedUpdateManyWithoutDirectus_rolesNestedInput } from '../directus-shares/directus-shares-unchecked-update-many-without-directus-roles-nested.input';

@InputType()
export class directus_rolesUncheckedUpdateWithoutDirectus_usersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    icon?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    ip_access?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    enforce_tfa?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    admin_access?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    app_access?: BoolFieldUpdateOperationsInput;

    @Field(() => directus_permissionsUncheckedUpdateManyWithoutDirectus_rolesNestedInput, {nullable:true})
    directus_permissions?: directus_permissionsUncheckedUpdateManyWithoutDirectus_rolesNestedInput;

    @Field(() => directus_presetsUncheckedUpdateManyWithoutDirectus_rolesNestedInput, {nullable:true})
    directus_presets?: directus_presetsUncheckedUpdateManyWithoutDirectus_rolesNestedInput;

    @Field(() => directus_sharesUncheckedUpdateManyWithoutDirectus_rolesNestedInput, {nullable:true})
    directus_shares?: directus_sharesUncheckedUpdateManyWithoutDirectus_rolesNestedInput;
}
