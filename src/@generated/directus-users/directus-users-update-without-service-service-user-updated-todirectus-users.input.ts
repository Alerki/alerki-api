import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { CurrencyUpdateManyWithoutDirectus_users_Currency_user_createdTodirectus_usersNestedInput } from '../currency/currency-update-many-without-directus-users-currency-user-created-todirectus-users-nested.input';
import { CurrencyUpdateManyWithoutDirectus_users_Currency_user_updatedTodirectus_usersNestedInput } from '../currency/currency-update-many-without-directus-users-currency-user-updated-todirectus-users-nested.input';
import { NotificationTypeUpdateManyWithoutDirectus_users_NotificationType_user_createdTodirectus_usersNestedInput } from '../notification-type/notification-type-update-many-without-directus-users-notification-type-user-created-todirectus-users-nested.input';
import { NotificationTypeUpdateManyWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersNestedInput } from '../notification-type/notification-type-update-many-without-directus-users-notification-type-user-updated-todirectus-users-nested.input';
import { ServiceUpdateManyWithoutDirectus_users_Service_user_createdTodirectus_usersNestedInput } from '../service/service-update-many-without-directus-users-service-user-created-todirectus-users-nested.input';
import { directus_dashboardsUpdateManyWithoutDirectus_usersNestedInput } from '../directus-dashboards/directus-dashboards-update-many-without-directus-users-nested.input';
import { directus_filesUpdateManyWithoutDirectus_users_directus_files_modified_byTodirectus_usersNestedInput } from '../directus-files/directus-files-update-many-without-directus-users-directus-files-modified-by-todirectus-users-nested.input';
import { directus_filesUpdateManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersNestedInput } from '../directus-files/directus-files-update-many-without-directus-users-directus-files-uploaded-by-todirectus-users-nested.input';
import { directus_flowsUpdateManyWithoutDirectus_usersNestedInput } from '../directus-flows/directus-flows-update-many-without-directus-users-nested.input';
import { directus_notificationsUpdateManyWithoutDirectus_users_directus_notifications_recipientTodirectus_usersNestedInput } from '../directus-notifications/directus-notifications-update-many-without-directus-users-directus-notifications-recipient-todirectus-users-nested.input';
import { directus_notificationsUpdateManyWithoutDirectus_users_directus_notifications_senderTodirectus_usersNestedInput } from '../directus-notifications/directus-notifications-update-many-without-directus-users-directus-notifications-sender-todirectus-users-nested.input';
import { directus_operationsUpdateManyWithoutDirectus_usersNestedInput } from '../directus-operations/directus-operations-update-many-without-directus-users-nested.input';
import { directus_panelsUpdateManyWithoutDirectus_usersNestedInput } from '../directus-panels/directus-panels-update-many-without-directus-users-nested.input';
import { directus_presetsUpdateManyWithoutDirectus_usersNestedInput } from '../directus-presets/directus-presets-update-many-without-directus-users-nested.input';
import { directus_sessionsUpdateManyWithoutDirectus_usersNestedInput } from '../directus-sessions/directus-sessions-update-many-without-directus-users-nested.input';
import { directus_sharesUpdateManyWithoutDirectus_usersNestedInput } from '../directus-shares/directus-shares-update-many-without-directus-users-nested.input';
import { directus_rolesUpdateOneWithoutDirectus_usersNestedInput } from '../directus-roles/directus-roles-update-one-without-directus-users-nested.input';
import { directus_versionsUpdateManyWithoutDirectus_users_directus_versions_user_createdTodirectus_usersNestedInput } from '../directus-versions/directus-versions-update-many-without-directus-users-directus-versions-user-created-todirectus-users-nested.input';
import { directus_versionsUpdateManyWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersNestedInput } from '../directus-versions/directus-versions-update-many-without-directus-users-directus-versions-user-updated-todirectus-users-nested.input';

@InputType()
export class directus_usersUpdateWithoutService_Service_user_updatedTodirectus_usersInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  first_name?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  last_name?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  email?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  password?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  location?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  title?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: NullableStringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  tags?: any;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  avatar?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  language?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  tfa_secret?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  status?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  token?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  last_access?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  last_page?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provider?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  external_identifier?: NullableStringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  auth_data?: any;

  @Field(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  email_notifications?: NullableBoolFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  appearance?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  theme_dark?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  theme_light?: NullableStringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  theme_light_overrides?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  theme_dark_overrides?: any;

  @Field(
    () =>
      CurrencyUpdateManyWithoutDirectus_users_Currency_user_createdTodirectus_usersNestedInput,
    { nullable: true },
  )
  Currency_Currency_user_createdTodirectus_users?: CurrencyUpdateManyWithoutDirectus_users_Currency_user_createdTodirectus_usersNestedInput;

  @Field(
    () =>
      CurrencyUpdateManyWithoutDirectus_users_Currency_user_updatedTodirectus_usersNestedInput,
    { nullable: true },
  )
  Currency_Currency_user_updatedTodirectus_users?: CurrencyUpdateManyWithoutDirectus_users_Currency_user_updatedTodirectus_usersNestedInput;

  @Field(
    () =>
      NotificationTypeUpdateManyWithoutDirectus_users_NotificationType_user_createdTodirectus_usersNestedInput,
    { nullable: true },
  )
  NotificationType_NotificationType_user_createdTodirectus_users?: NotificationTypeUpdateManyWithoutDirectus_users_NotificationType_user_createdTodirectus_usersNestedInput;

  @Field(
    () =>
      NotificationTypeUpdateManyWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersNestedInput,
    { nullable: true },
  )
  NotificationType_NotificationType_user_updatedTodirectus_users?: NotificationTypeUpdateManyWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersNestedInput;

  @Field(
    () =>
      ServiceUpdateManyWithoutDirectus_users_Service_user_createdTodirectus_usersNestedInput,
    { nullable: true },
  )
  Service_Service_user_createdTodirectus_users?: ServiceUpdateManyWithoutDirectus_users_Service_user_createdTodirectus_usersNestedInput;

  @Field(() => directus_dashboardsUpdateManyWithoutDirectus_usersNestedInput, {
    nullable: true,
  })
  directus_dashboards?: directus_dashboardsUpdateManyWithoutDirectus_usersNestedInput;

  @Field(
    () =>
      directus_filesUpdateManyWithoutDirectus_users_directus_files_modified_byTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_files_directus_files_modified_byTodirectus_users?: directus_filesUpdateManyWithoutDirectus_users_directus_files_modified_byTodirectus_usersNestedInput;

  @Field(
    () =>
      directus_filesUpdateManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_files_directus_files_uploaded_byTodirectus_users?: directus_filesUpdateManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersNestedInput;

  @Field(() => directus_flowsUpdateManyWithoutDirectus_usersNestedInput, {
    nullable: true,
  })
  directus_flows?: directus_flowsUpdateManyWithoutDirectus_usersNestedInput;

  @Field(
    () =>
      directus_notificationsUpdateManyWithoutDirectus_users_directus_notifications_recipientTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_notifications_directus_notifications_recipientTodirectus_users?: directus_notificationsUpdateManyWithoutDirectus_users_directus_notifications_recipientTodirectus_usersNestedInput;

  @Field(
    () =>
      directus_notificationsUpdateManyWithoutDirectus_users_directus_notifications_senderTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_notifications_directus_notifications_senderTodirectus_users?: directus_notificationsUpdateManyWithoutDirectus_users_directus_notifications_senderTodirectus_usersNestedInput;

  @Field(() => directus_operationsUpdateManyWithoutDirectus_usersNestedInput, {
    nullable: true,
  })
  directus_operations?: directus_operationsUpdateManyWithoutDirectus_usersNestedInput;

  @Field(() => directus_panelsUpdateManyWithoutDirectus_usersNestedInput, {
    nullable: true,
  })
  directus_panels?: directus_panelsUpdateManyWithoutDirectus_usersNestedInput;

  @Field(() => directus_presetsUpdateManyWithoutDirectus_usersNestedInput, {
    nullable: true,
  })
  directus_presets?: directus_presetsUpdateManyWithoutDirectus_usersNestedInput;

  @Field(() => directus_sessionsUpdateManyWithoutDirectus_usersNestedInput, {
    nullable: true,
  })
  directus_sessions?: directus_sessionsUpdateManyWithoutDirectus_usersNestedInput;

  @Field(() => directus_sharesUpdateManyWithoutDirectus_usersNestedInput, {
    nullable: true,
  })
  directus_shares?: directus_sharesUpdateManyWithoutDirectus_usersNestedInput;

  @Field(() => directus_rolesUpdateOneWithoutDirectus_usersNestedInput, {
    nullable: true,
  })
  directus_roles?: directus_rolesUpdateOneWithoutDirectus_usersNestedInput;

  @Field(
    () =>
      directus_versionsUpdateManyWithoutDirectus_users_directus_versions_user_createdTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_versions_directus_versions_user_createdTodirectus_users?: directus_versionsUpdateManyWithoutDirectus_users_directus_versions_user_createdTodirectus_usersNestedInput;

  @Field(
    () =>
      directus_versionsUpdateManyWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_versions_directus_versions_user_updatedTodirectus_users?: directus_versionsUpdateManyWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersNestedInput;
}
