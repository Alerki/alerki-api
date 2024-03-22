import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { directus_filesUpdateManyWithoutDirectus_foldersNestedInput } from '../directus-files/directus-files-update-many-without-directus-folders-nested.input';
import { directus_foldersUpdateManyWithoutDirectus_foldersNestedInput } from './directus-folders-update-many-without-directus-folders-nested.input';
import { directus_settingsUpdateManyWithoutDirectus_foldersNestedInput } from '../directus-settings/directus-settings-update-many-without-directus-folders-nested.input';

@InputType()
export class directus_foldersUpdateWithoutDirectus_foldersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => directus_filesUpdateManyWithoutDirectus_foldersNestedInput, {nullable:true})
    directus_files?: directus_filesUpdateManyWithoutDirectus_foldersNestedInput;

    @Field(() => directus_foldersUpdateManyWithoutDirectus_foldersNestedInput, {nullable:true})
    other_directus_folders?: directus_foldersUpdateManyWithoutDirectus_foldersNestedInput;

    @Field(() => directus_settingsUpdateManyWithoutDirectus_foldersNestedInput, {nullable:true})
    directus_settings?: directus_settingsUpdateManyWithoutDirectus_foldersNestedInput;
}
