import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { CurrencyUncheckedCreateNestedManyWithoutDirectus_users_Currency_user_createdTodirectus_usersInput } from '../currency/currency-unchecked-create-nested-many-without-directus-users-currency-user-created-todirectus-users.input';
import { CurrencyUncheckedCreateNestedManyWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput } from '../currency/currency-unchecked-create-nested-many-without-directus-users-currency-user-updated-todirectus-users.input';
import { NotificationTypeUncheckedCreateNestedManyWithoutDirectus_users_NotificationType_user_createdTodirectus_usersInput } from '../notification-type/notification-type-unchecked-create-nested-many-without-directus-users-notification-type-user-created-todirectus-users.input';
import { NotificationTypeUncheckedCreateNestedManyWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput } from '../notification-type/notification-type-unchecked-create-nested-many-without-directus-users-notification-type-user-updated-todirectus-users.input';
import { ServiceUncheckedCreateNestedManyWithoutDirectus_users_Service_user_createdTodirectus_usersInput } from '../service/service-unchecked-create-nested-many-without-directus-users-service-user-created-todirectus-users.input';
import { ServiceUncheckedCreateNestedManyWithoutDirectus_users_Service_user_updatedTodirectus_usersInput } from '../service/service-unchecked-create-nested-many-without-directus-users-service-user-updated-todirectus-users.input';
import { directus_dashboardsUncheckedCreateNestedManyWithoutDirectus_usersInput } from '../directus-dashboards/directus-dashboards-unchecked-create-nested-many-without-directus-users.input';
import { directus_filesUncheckedCreateNestedManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput } from '../directus-files/directus-files-unchecked-create-nested-many-without-directus-users-directus-files-uploaded-by-todirectus-users.input';
import { directus_flowsUncheckedCreateNestedManyWithoutDirectus_usersInput } from '../directus-flows/directus-flows-unchecked-create-nested-many-without-directus-users.input';
import { directus_notificationsUncheckedCreateNestedManyWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput } from '../directus-notifications/directus-notifications-unchecked-create-nested-many-without-directus-users-directus-notifications-recipient-todirectus-users.input';
import { directus_notificationsUncheckedCreateNestedManyWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput } from '../directus-notifications/directus-notifications-unchecked-create-nested-many-without-directus-users-directus-notifications-sender-todirectus-users.input';
import { directus_operationsUncheckedCreateNestedManyWithoutDirectus_usersInput } from '../directus-operations/directus-operations-unchecked-create-nested-many-without-directus-users.input';
import { directus_panelsUncheckedCreateNestedManyWithoutDirectus_usersInput } from '../directus-panels/directus-panels-unchecked-create-nested-many-without-directus-users.input';
import { directus_presetsUncheckedCreateNestedManyWithoutDirectus_usersInput } from '../directus-presets/directus-presets-unchecked-create-nested-many-without-directus-users.input';
import { directus_sessionsUncheckedCreateNestedManyWithoutDirectus_usersInput } from '../directus-sessions/directus-sessions-unchecked-create-nested-many-without-directus-users.input';
import { directus_sharesUncheckedCreateNestedManyWithoutDirectus_usersInput } from '../directus-shares/directus-shares-unchecked-create-nested-many-without-directus-users.input';
import { directus_versionsUncheckedCreateNestedManyWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput } from '../directus-versions/directus-versions-unchecked-create-nested-many-without-directus-users-directus-versions-user-created-todirectus-users.input';
import { directus_versionsUncheckedCreateNestedManyWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput } from '../directus-versions/directus-versions-unchecked-create-nested-many-without-directus-users-directus-versions-user-updated-todirectus-users.input';

@InputType()
export class directus_usersUncheckedCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    first_name?: string;

    @Field(() => String, {nullable:true})
    last_name?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    tags?: any;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => String, {nullable:true})
    language?: string;

    @Field(() => String, {nullable:true})
    tfa_secret?: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:true})
    role?: string;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => Date, {nullable:true})
    last_access?: Date | string;

    @Field(() => String, {nullable:true})
    last_page?: string;

    @Field(() => String, {nullable:true})
    provider?: string;

    @Field(() => String, {nullable:true})
    external_identifier?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    auth_data?: any;

    @Field(() => Boolean, {nullable:true})
    email_notifications?: boolean;

    @Field(() => String, {nullable:true})
    appearance?: string;

    @Field(() => String, {nullable:true})
    theme_dark?: string;

    @Field(() => String, {nullable:true})
    theme_light?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    theme_light_overrides?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    theme_dark_overrides?: any;

    @Field(() => CurrencyUncheckedCreateNestedManyWithoutDirectus_users_Currency_user_createdTodirectus_usersInput, {nullable:true})
    Currency_Currency_user_createdTodirectus_users?: CurrencyUncheckedCreateNestedManyWithoutDirectus_users_Currency_user_createdTodirectus_usersInput;

    @Field(() => CurrencyUncheckedCreateNestedManyWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput, {nullable:true})
    Currency_Currency_user_updatedTodirectus_users?: CurrencyUncheckedCreateNestedManyWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput;

    @Field(() => NotificationTypeUncheckedCreateNestedManyWithoutDirectus_users_NotificationType_user_createdTodirectus_usersInput, {nullable:true})
    NotificationType_NotificationType_user_createdTodirectus_users?: NotificationTypeUncheckedCreateNestedManyWithoutDirectus_users_NotificationType_user_createdTodirectus_usersInput;

    @Field(() => NotificationTypeUncheckedCreateNestedManyWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput, {nullable:true})
    NotificationType_NotificationType_user_updatedTodirectus_users?: NotificationTypeUncheckedCreateNestedManyWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput;

    @Field(() => ServiceUncheckedCreateNestedManyWithoutDirectus_users_Service_user_createdTodirectus_usersInput, {nullable:true})
    Service_Service_user_createdTodirectus_users?: ServiceUncheckedCreateNestedManyWithoutDirectus_users_Service_user_createdTodirectus_usersInput;

    @Field(() => ServiceUncheckedCreateNestedManyWithoutDirectus_users_Service_user_updatedTodirectus_usersInput, {nullable:true})
    Service_Service_user_updatedTodirectus_users?: ServiceUncheckedCreateNestedManyWithoutDirectus_users_Service_user_updatedTodirectus_usersInput;

    @Field(() => directus_dashboardsUncheckedCreateNestedManyWithoutDirectus_usersInput, {nullable:true})
    directus_dashboards?: directus_dashboardsUncheckedCreateNestedManyWithoutDirectus_usersInput;

    @Field(() => directus_filesUncheckedCreateNestedManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput, {nullable:true})
    directus_files_directus_files_uploaded_byTodirectus_users?: directus_filesUncheckedCreateNestedManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput;

    @Field(() => directus_flowsUncheckedCreateNestedManyWithoutDirectus_usersInput, {nullable:true})
    directus_flows?: directus_flowsUncheckedCreateNestedManyWithoutDirectus_usersInput;

    @Field(() => directus_notificationsUncheckedCreateNestedManyWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput, {nullable:true})
    directus_notifications_directus_notifications_recipientTodirectus_users?: directus_notificationsUncheckedCreateNestedManyWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput;

    @Field(() => directus_notificationsUncheckedCreateNestedManyWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput, {nullable:true})
    directus_notifications_directus_notifications_senderTodirectus_users?: directus_notificationsUncheckedCreateNestedManyWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput;

    @Field(() => directus_operationsUncheckedCreateNestedManyWithoutDirectus_usersInput, {nullable:true})
    directus_operations?: directus_operationsUncheckedCreateNestedManyWithoutDirectus_usersInput;

    @Field(() => directus_panelsUncheckedCreateNestedManyWithoutDirectus_usersInput, {nullable:true})
    directus_panels?: directus_panelsUncheckedCreateNestedManyWithoutDirectus_usersInput;

    @Field(() => directus_presetsUncheckedCreateNestedManyWithoutDirectus_usersInput, {nullable:true})
    directus_presets?: directus_presetsUncheckedCreateNestedManyWithoutDirectus_usersInput;

    @Field(() => directus_sessionsUncheckedCreateNestedManyWithoutDirectus_usersInput, {nullable:true})
    directus_sessions?: directus_sessionsUncheckedCreateNestedManyWithoutDirectus_usersInput;

    @Field(() => directus_sharesUncheckedCreateNestedManyWithoutDirectus_usersInput, {nullable:true})
    directus_shares?: directus_sharesUncheckedCreateNestedManyWithoutDirectus_usersInput;

    @Field(() => directus_versionsUncheckedCreateNestedManyWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput, {nullable:true})
    directus_versions_directus_versions_user_createdTodirectus_users?: directus_versionsUncheckedCreateNestedManyWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput;

    @Field(() => directus_versionsUncheckedCreateNestedManyWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput, {nullable:true})
    directus_versions_directus_versions_user_updatedTodirectus_users?: directus_versionsUncheckedCreateNestedManyWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput;
}
