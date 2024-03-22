import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { directus_permissionsUpdateManyWithoutDirectus_rolesNestedInput } from '../directus-permissions/directus-permissions-update-many-without-directus-roles-nested.input';
import { directus_presetsUpdateManyWithoutDirectus_rolesNestedInput } from '../directus-presets/directus-presets-update-many-without-directus-roles-nested.input';
import { directus_usersUpdateManyWithoutDirectus_rolesNestedInput } from '../directus-users/directus-users-update-many-without-directus-roles-nested.input';

@InputType()
export class directus_rolesUpdateWithoutDirectus_sharesInput {

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

    @Field(() => directus_permissionsUpdateManyWithoutDirectus_rolesNestedInput, {nullable:true})
    directus_permissions?: directus_permissionsUpdateManyWithoutDirectus_rolesNestedInput;

    @Field(() => directus_presetsUpdateManyWithoutDirectus_rolesNestedInput, {nullable:true})
    directus_presets?: directus_presetsUpdateManyWithoutDirectus_rolesNestedInput;

    @Field(() => directus_usersUpdateManyWithoutDirectus_rolesNestedInput, {nullable:true})
    directus_users?: directus_usersUpdateManyWithoutDirectus_rolesNestedInput;
}
