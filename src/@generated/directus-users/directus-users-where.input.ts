import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { CurrencyListRelationFilter } from '../currency/currency-list-relation-filter.input';
import { NotificationTypeListRelationFilter } from '../notification-type/notification-type-list-relation-filter.input';
import { ServiceListRelationFilter } from '../service/service-list-relation-filter.input';
import { Directus_dashboardsListRelationFilter } from '../prisma/directus-dashboards-list-relation-filter.input';
import { Directus_filesListRelationFilter } from '../prisma/directus-files-list-relation-filter.input';
import { Directus_flowsListRelationFilter } from '../prisma/directus-flows-list-relation-filter.input';
import { Directus_notificationsListRelationFilter } from '../prisma/directus-notifications-list-relation-filter.input';
import { Directus_operationsListRelationFilter } from '../prisma/directus-operations-list-relation-filter.input';
import { Directus_panelsListRelationFilter } from '../prisma/directus-panels-list-relation-filter.input';
import { Directus_presetsListRelationFilter } from '../prisma/directus-presets-list-relation-filter.input';
import { Directus_sessionsListRelationFilter } from '../prisma/directus-sessions-list-relation-filter.input';
import { Directus_sharesListRelationFilter } from '../prisma/directus-shares-list-relation-filter.input';
import { Directus_rolesRelationFilter } from '../prisma/directus-roles-relation-filter.input';
import { Directus_versionsListRelationFilter } from '../prisma/directus-versions-list-relation-filter.input';

@InputType()
export class directus_usersWhereInput {

    @Field(() => [directus_usersWhereInput], {nullable:true})
    AND?: Array<directus_usersWhereInput>;

    @Field(() => [directus_usersWhereInput], {nullable:true})
    OR?: Array<directus_usersWhereInput>;

    @Field(() => [directus_usersWhereInput], {nullable:true})
    NOT?: Array<directus_usersWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    first_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    last_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    location?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    tags?: JsonNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    avatar?: UuidNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    language?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tfa_secret?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    role?: UuidNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    token?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    last_access?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    last_page?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    provider?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    external_identifier?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    auth_data?: JsonNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    email_notifications?: BoolNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    appearance?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    theme_dark?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    theme_light?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    theme_light_overrides?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    theme_dark_overrides?: JsonNullableFilter;

    @Field(() => CurrencyListRelationFilter, {nullable:true})
    Currency_Currency_user_createdTodirectus_users?: CurrencyListRelationFilter;

    @Field(() => CurrencyListRelationFilter, {nullable:true})
    Currency_Currency_user_updatedTodirectus_users?: CurrencyListRelationFilter;

    @Field(() => NotificationTypeListRelationFilter, {nullable:true})
    NotificationType_NotificationType_user_createdTodirectus_users?: NotificationTypeListRelationFilter;

    @Field(() => NotificationTypeListRelationFilter, {nullable:true})
    NotificationType_NotificationType_user_updatedTodirectus_users?: NotificationTypeListRelationFilter;

    @Field(() => ServiceListRelationFilter, {nullable:true})
    Service_Service_user_createdTodirectus_users?: ServiceListRelationFilter;

    @Field(() => ServiceListRelationFilter, {nullable:true})
    Service_Service_user_updatedTodirectus_users?: ServiceListRelationFilter;

    @Field(() => Directus_dashboardsListRelationFilter, {nullable:true})
    directus_dashboards?: Directus_dashboardsListRelationFilter;

    @Field(() => Directus_filesListRelationFilter, {nullable:true})
    directus_files_directus_files_modified_byTodirectus_users?: Directus_filesListRelationFilter;

    @Field(() => Directus_filesListRelationFilter, {nullable:true})
    directus_files_directus_files_uploaded_byTodirectus_users?: Directus_filesListRelationFilter;

    @Field(() => Directus_flowsListRelationFilter, {nullable:true})
    directus_flows?: Directus_flowsListRelationFilter;

    @Field(() => Directus_notificationsListRelationFilter, {nullable:true})
    directus_notifications_directus_notifications_recipientTodirectus_users?: Directus_notificationsListRelationFilter;

    @Field(() => Directus_notificationsListRelationFilter, {nullable:true})
    directus_notifications_directus_notifications_senderTodirectus_users?: Directus_notificationsListRelationFilter;

    @Field(() => Directus_operationsListRelationFilter, {nullable:true})
    directus_operations?: Directus_operationsListRelationFilter;

    @Field(() => Directus_panelsListRelationFilter, {nullable:true})
    directus_panels?: Directus_panelsListRelationFilter;

    @Field(() => Directus_presetsListRelationFilter, {nullable:true})
    directus_presets?: Directus_presetsListRelationFilter;

    @Field(() => Directus_sessionsListRelationFilter, {nullable:true})
    directus_sessions?: Directus_sessionsListRelationFilter;

    @Field(() => Directus_sharesListRelationFilter, {nullable:true})
    directus_shares?: Directus_sharesListRelationFilter;

    @Field(() => Directus_rolesRelationFilter, {nullable:true})
    directus_roles?: Directus_rolesRelationFilter;

    @Field(() => Directus_versionsListRelationFilter, {nullable:true})
    directus_versions_directus_versions_user_createdTodirectus_users?: Directus_versionsListRelationFilter;

    @Field(() => Directus_versionsListRelationFilter, {nullable:true})
    directus_versions_directus_versions_user_updatedTodirectus_users?: Directus_versionsListRelationFilter;
}
