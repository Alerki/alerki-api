import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { UserPictureUncheckedUpdateManyWithoutDirectus_filesNestedInput } from '../user-picture/user-picture-unchecked-update-many-without-directus-files-nested.input';
import { directus_settingsUncheckedUpdateManyWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesNestedInput } from '../directus-settings/directus-settings-unchecked-update-many-without-directus-files-directus-settings-public-background-todirectus-files-nested.input';
import { directus_settingsUncheckedUpdateManyWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesNestedInput } from '../directus-settings/directus-settings-unchecked-update-many-without-directus-files-directus-settings-public-favicon-todirectus-files-nested.input';
import { directus_settingsUncheckedUpdateManyWithoutDirectus_files_directus_settings_public_foregroundTodirectus_filesNestedInput } from '../directus-settings/directus-settings-unchecked-update-many-without-directus-files-directus-settings-public-foreground-todirectus-files-nested.input';

@InputType()
export class directus_filesUncheckedUpdateWithoutDirectus_settings_directus_settings_project_logoTodirectus_filesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storage?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    filename_disk?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    filename_download?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    type?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    folder?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    uploaded_by?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    uploaded_on?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    modified_by?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    modified_on?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    charset?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableBigIntFieldUpdateOperationsInput, {nullable:true})
    filesize?: NullableBigIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    width?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    height?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    duration?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    embed?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    location?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    tags?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    focal_point_x?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    focal_point_y?: NullableIntFieldUpdateOperationsInput;

    @Field(() => UserPictureUncheckedUpdateManyWithoutDirectus_filesNestedInput, {nullable:true})
    UserPicture?: UserPictureUncheckedUpdateManyWithoutDirectus_filesNestedInput;

    @Field(() => directus_settingsUncheckedUpdateManyWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesNestedInput, {nullable:true})
    directus_settings_directus_settings_public_backgroundTodirectus_files?: directus_settingsUncheckedUpdateManyWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesNestedInput;

    @Field(() => directus_settingsUncheckedUpdateManyWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesNestedInput, {nullable:true})
    directus_settings_directus_settings_public_faviconTodirectus_files?: directus_settingsUncheckedUpdateManyWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesNestedInput;

    @Field(() => directus_settingsUncheckedUpdateManyWithoutDirectus_files_directus_settings_public_foregroundTodirectus_filesNestedInput, {nullable:true})
    directus_settings_directus_settings_public_foregroundTodirectus_files?: directus_settingsUncheckedUpdateManyWithoutDirectus_files_directus_settings_public_foregroundTodirectus_filesNestedInput;
}
