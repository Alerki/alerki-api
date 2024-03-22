import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { directus_foldersUncheckedUpdateManyWithoutDirectus_foldersNestedInput } from './directus-folders-unchecked-update-many-without-directus-folders-nested.input';
import { directus_settingsUncheckedUpdateManyWithoutDirectus_foldersNestedInput } from '../directus-settings/directus-settings-unchecked-update-many-without-directus-folders-nested.input';

@InputType()
export class directus_foldersUncheckedUpdateWithoutDirectus_filesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    parent?: NullableStringFieldUpdateOperationsInput;

    @Field(() => directus_foldersUncheckedUpdateManyWithoutDirectus_foldersNestedInput, {nullable:true})
    other_directus_folders?: directus_foldersUncheckedUpdateManyWithoutDirectus_foldersNestedInput;

    @Field(() => directus_settingsUncheckedUpdateManyWithoutDirectus_foldersNestedInput, {nullable:true})
    directus_settings?: directus_settingsUncheckedUpdateManyWithoutDirectus_foldersNestedInput;
}
