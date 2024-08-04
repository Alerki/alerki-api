import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { UserPictureUpdateManyWithoutDirectus_filesNestedInput } from '../user-picture/user-picture-update-many-without-directus-files-nested.input';
import { directus_foldersUpdateOneWithoutDirectus_filesNestedInput } from '../directus-folders/directus-folders-update-one-without-directus-files-nested.input';
import { directus_usersUpdateOneWithoutDirectus_files_directus_files_modified_byTodirectus_usersNestedInput } from '../directus-users/directus-users-update-one-without-directus-files-directus-files-modified-by-todirectus-users-nested.input';
import { directus_usersUpdateOneWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersNestedInput } from '../directus-users/directus-users-update-one-without-directus-files-directus-files-uploaded-by-todirectus-users-nested.input';
import { directus_settingsUpdateManyWithoutDirectus_files_directus_settings_project_logoTodirectus_filesNestedInput } from '../directus-settings/directus-settings-update-many-without-directus-files-directus-settings-project-logo-todirectus-files-nested.input';
import { directus_settingsUpdateManyWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesNestedInput } from '../directus-settings/directus-settings-update-many-without-directus-files-directus-settings-public-favicon-todirectus-files-nested.input';
import { directus_settingsUpdateManyWithoutDirectus_files_directus_settings_public_foregroundTodirectus_filesNestedInput } from '../directus-settings/directus-settings-update-many-without-directus-files-directus-settings-public-foreground-todirectus-files-nested.input';

@InputType()
export class directus_filesUpdateWithoutDirectus_settings_directus_settings_public_backgroundTodirectus_filesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  storage?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  filename_disk?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  filename_download?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  title?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  type?: NullableStringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  uploaded_on?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  modified_on?: DateTimeFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  charset?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableBigIntFieldUpdateOperationsInput, { nullable: true })
  filesize?: NullableBigIntFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  width?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  height?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  duration?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  embed?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  location?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  tags?: NullableStringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  focal_point_x?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  focal_point_y?: NullableIntFieldUpdateOperationsInput;

  @Field(() => UserPictureUpdateManyWithoutDirectus_filesNestedInput, {
    nullable: true,
  })
  UserPicture?: UserPictureUpdateManyWithoutDirectus_filesNestedInput;

  @Field(() => directus_foldersUpdateOneWithoutDirectus_filesNestedInput, {
    nullable: true,
  })
  directus_folders?: directus_foldersUpdateOneWithoutDirectus_filesNestedInput;

  @Field(
    () =>
      directus_usersUpdateOneWithoutDirectus_files_directus_files_modified_byTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_users_directus_files_modified_byTodirectus_users?: directus_usersUpdateOneWithoutDirectus_files_directus_files_modified_byTodirectus_usersNestedInput;

  @Field(
    () =>
      directus_usersUpdateOneWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_users_directus_files_uploaded_byTodirectus_users?: directus_usersUpdateOneWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersNestedInput;

  @Field(
    () =>
      directus_settingsUpdateManyWithoutDirectus_files_directus_settings_project_logoTodirectus_filesNestedInput,
    { nullable: true },
  )
  directus_settings_directus_settings_project_logoTodirectus_files?: directus_settingsUpdateManyWithoutDirectus_files_directus_settings_project_logoTodirectus_filesNestedInput;

  @Field(
    () =>
      directus_settingsUpdateManyWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesNestedInput,
    { nullable: true },
  )
  directus_settings_directus_settings_public_faviconTodirectus_files?: directus_settingsUpdateManyWithoutDirectus_files_directus_settings_public_faviconTodirectus_filesNestedInput;

  @Field(
    () =>
      directus_settingsUpdateManyWithoutDirectus_files_directus_settings_public_foregroundTodirectus_filesNestedInput,
    { nullable: true },
  )
  directus_settings_directus_settings_public_foregroundTodirectus_files?: directus_settingsUpdateManyWithoutDirectus_files_directus_settings_public_foregroundTodirectus_filesNestedInput;
}
