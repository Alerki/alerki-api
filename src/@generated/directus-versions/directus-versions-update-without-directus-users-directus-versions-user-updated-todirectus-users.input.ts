import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { directus_revisionsUpdateManyWithoutDirectus_versionsNestedInput } from '../directus-revisions/directus-revisions-update-many-without-directus-versions-nested.input';
import { directus_collectionsUpdateOneRequiredWithoutDirectus_versionsNestedInput } from '../directus-collections/directus-collections-update-one-required-without-directus-versions-nested.input';
import { directus_usersUpdateOneWithoutDirectus_versions_directus_versions_user_createdTodirectus_usersNestedInput } from '../directus-users/directus-users-update-one-without-directus-versions-directus-versions-user-created-todirectus-users-nested.input';

@InputType()
export class directus_versionsUpdateWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  item?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  hash?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_created?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_updated?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(
    () => directus_revisionsUpdateManyWithoutDirectus_versionsNestedInput,
    { nullable: true },
  )
  directus_revisions?: directus_revisionsUpdateManyWithoutDirectus_versionsNestedInput;

  @Field(
    () =>
      directus_collectionsUpdateOneRequiredWithoutDirectus_versionsNestedInput,
    { nullable: true },
  )
  directus_collections?: directus_collectionsUpdateOneRequiredWithoutDirectus_versionsNestedInput;

  @Field(
    () =>
      directus_usersUpdateOneWithoutDirectus_versions_directus_versions_user_createdTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_users_directus_versions_user_createdTodirectus_users?: directus_usersUpdateOneWithoutDirectus_versions_directus_versions_user_createdTodirectus_usersNestedInput;
}
