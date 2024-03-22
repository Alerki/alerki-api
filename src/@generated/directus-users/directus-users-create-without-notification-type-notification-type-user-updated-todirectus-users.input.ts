import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { CurrencyCreateNestedManyWithoutDirectus_users_Currency_user_createdTodirectus_usersInput } from '../currency/currency-create-nested-many-without-directus-users-currency-user-created-todirectus-users.input';
import { CurrencyCreateNestedManyWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput } from '../currency/currency-create-nested-many-without-directus-users-currency-user-updated-todirectus-users.input';
import { NotificationTypeCreateNestedManyWithoutDirectus_users_NotificationType_user_createdTodirectus_usersInput } from '../notification-type/notification-type-create-nested-many-without-directus-users-notification-type-user-created-todirectus-users.input';
import { ServiceCreateNestedManyWithoutDirectus_users_Service_user_createdTodirectus_usersInput } from '../service/service-create-nested-many-without-directus-users-service-user-created-todirectus-users.input';
import { ServiceCreateNestedManyWithoutDirectus_users_Service_user_updatedTodirectus_usersInput } from '../service/service-create-nested-many-without-directus-users-service-user-updated-todirectus-users.input';
import { directus_dashboardsCreateNestedManyWithoutDirectus_usersInput } from '../directus-dashboards/directus-dashboards-create-nested-many-without-directus-users.input';
import { directus_filesCreateNestedManyWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput } from '../directus-files/directus-files-create-nested-many-without-directus-users-directus-files-modified-by-todirectus-users.input';
import { directus_filesCreateNestedManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput } from '../directus-files/directus-files-create-nested-many-without-directus-users-directus-files-uploaded-by-todirectus-users.input';
import { directus_flowsCreateNestedManyWithoutDirectus_usersInput } from '../directus-flows/directus-flows-create-nested-many-without-directus-users.input';
import { directus_notificationsCreateNestedManyWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput } from '../directus-notifications/directus-notifications-create-nested-many-without-directus-users-directus-notifications-recipient-todirectus-users.input';
import { directus_notificationsCreateNestedManyWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput } from '../directus-notifications/directus-notifications-create-nested-many-without-directus-users-directus-notifications-sender-todirectus-users.input';
import { directus_operationsCreateNestedManyWithoutDirectus_usersInput } from '../directus-operations/directus-operations-create-nested-many-without-directus-users.input';
import { directus_panelsCreateNestedManyWithoutDirectus_usersInput } from '../directus-panels/directus-panels-create-nested-many-without-directus-users.input';
import { directus_presetsCreateNestedManyWithoutDirectus_usersInput } from '../directus-presets/directus-presets-create-nested-many-without-directus-users.input';
import { directus_sessionsCreateNestedManyWithoutDirectus_usersInput } from '../directus-sessions/directus-sessions-create-nested-many-without-directus-users.input';
import { directus_sharesCreateNestedManyWithoutDirectus_usersInput } from '../directus-shares/directus-shares-create-nested-many-without-directus-users.input';
import { directus_rolesCreateNestedOneWithoutDirectus_usersInput } from '../directus-roles/directus-roles-create-nested-one-without-directus-users.input';
import { directus_versionsCreateNestedManyWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput } from '../directus-versions/directus-versions-create-nested-many-without-directus-users-directus-versions-user-created-todirectus-users.input';
import { directus_versionsCreateNestedManyWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput } from '../directus-versions/directus-versions-create-nested-many-without-directus-users-directus-versions-user-updated-todirectus-users.input';

@InputType()
export class directus_usersCreateWithoutNotificationType_NotificationType_user_updatedTodirectus_usersInput {

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

    @Field(() => CurrencyCreateNestedManyWithoutDirectus_users_Currency_user_createdTodirectus_usersInput, {nullable:true})
    Currency_Currency_user_createdTodirectus_users?: CurrencyCreateNestedManyWithoutDirectus_users_Currency_user_createdTodirectus_usersInput;

    @Field(() => CurrencyCreateNestedManyWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput, {nullable:true})
    Currency_Currency_user_updatedTodirectus_users?: CurrencyCreateNestedManyWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput;

    @Field(() => NotificationTypeCreateNestedManyWithoutDirectus_users_NotificationType_user_createdTodirectus_usersInput, {nullable:true})
    NotificationType_NotificationType_user_createdTodirectus_users?: NotificationTypeCreateNestedManyWithoutDirectus_users_NotificationType_user_createdTodirectus_usersInput;

    @Field(() => ServiceCreateNestedManyWithoutDirectus_users_Service_user_createdTodirectus_usersInput, {nullable:true})
    Service_Service_user_createdTodirectus_users?: ServiceCreateNestedManyWithoutDirectus_users_Service_user_createdTodirectus_usersInput;

    @Field(() => ServiceCreateNestedManyWithoutDirectus_users_Service_user_updatedTodirectus_usersInput, {nullable:true})
    Service_Service_user_updatedTodirectus_users?: ServiceCreateNestedManyWithoutDirectus_users_Service_user_updatedTodirectus_usersInput;

    @Field(() => directus_dashboardsCreateNestedManyWithoutDirectus_usersInput, {nullable:true})
    directus_dashboards?: directus_dashboardsCreateNestedManyWithoutDirectus_usersInput;

    @Field(() => directus_filesCreateNestedManyWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput, {nullable:true})
    directus_files_directus_files_modified_byTodirectus_users?: directus_filesCreateNestedManyWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput;

    @Field(() => directus_filesCreateNestedManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput, {nullable:true})
    directus_files_directus_files_uploaded_byTodirectus_users?: directus_filesCreateNestedManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput;

    @Field(() => directus_flowsCreateNestedManyWithoutDirectus_usersInput, {nullable:true})
    directus_flows?: directus_flowsCreateNestedManyWithoutDirectus_usersInput;

    @Field(() => directus_notificationsCreateNestedManyWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput, {nullable:true})
    directus_notifications_directus_notifications_recipientTodirectus_users?: directus_notificationsCreateNestedManyWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput;

    @Field(() => directus_notificationsCreateNestedManyWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput, {nullable:true})
    directus_notifications_directus_notifications_senderTodirectus_users?: directus_notificationsCreateNestedManyWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput;

    @Field(() => directus_operationsCreateNestedManyWithoutDirectus_usersInput, {nullable:true})
    directus_operations?: directus_operationsCreateNestedManyWithoutDirectus_usersInput;

    @Field(() => directus_panelsCreateNestedManyWithoutDirectus_usersInput, {nullable:true})
    directus_panels?: directus_panelsCreateNestedManyWithoutDirectus_usersInput;

    @Field(() => directus_presetsCreateNestedManyWithoutDirectus_usersInput, {nullable:true})
    directus_presets?: directus_presetsCreateNestedManyWithoutDirectus_usersInput;

    @Field(() => directus_sessionsCreateNestedManyWithoutDirectus_usersInput, {nullable:true})
    directus_sessions?: directus_sessionsCreateNestedManyWithoutDirectus_usersInput;

    @Field(() => directus_sharesCreateNestedManyWithoutDirectus_usersInput, {nullable:true})
    directus_shares?: directus_sharesCreateNestedManyWithoutDirectus_usersInput;

    @Field(() => directus_rolesCreateNestedOneWithoutDirectus_usersInput, {nullable:true})
    directus_roles?: directus_rolesCreateNestedOneWithoutDirectus_usersInput;

    @Field(() => directus_versionsCreateNestedManyWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput, {nullable:true})
    directus_versions_directus_versions_user_createdTodirectus_users?: directus_versionsCreateNestedManyWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput;

    @Field(() => directus_versionsCreateNestedManyWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput, {nullable:true})
    directus_versions_directus_versions_user_updatedTodirectus_users?: directus_versionsCreateNestedManyWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput;
}
