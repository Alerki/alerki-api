import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { directus_filesUpdateManyWithoutDirectus_foldersNestedInput } from '../directus-files/directus-files-update-many-without-directus-folders-nested.input';
import { directus_foldersUpdateOneWithoutOther_directus_foldersNestedInput } from './directus-folders-update-one-without-other-directus-folders-nested.input';
import { directus_settingsUpdateManyWithoutDirectus_foldersNestedInput } from '../directus-settings/directus-settings-update-many-without-directus-folders-nested.input';

@InputType()
export class directus_foldersUpdateWithoutOther_directus_foldersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => directus_filesUpdateManyWithoutDirectus_foldersNestedInput, {nullable:true})
    directus_files?: directus_filesUpdateManyWithoutDirectus_foldersNestedInput;

    @Field(() => directus_foldersUpdateOneWithoutOther_directus_foldersNestedInput, {nullable:true})
    directus_folders?: directus_foldersUpdateOneWithoutOther_directus_foldersNestedInput;

    @Field(() => directus_settingsUpdateManyWithoutDirectus_foldersNestedInput, {nullable:true})
    directus_settings?: directus_settingsUpdateManyWithoutDirectus_foldersNestedInput;
}
