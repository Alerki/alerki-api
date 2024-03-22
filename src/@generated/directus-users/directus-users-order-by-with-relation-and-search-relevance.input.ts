import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CurrencyOrderByRelationAggregateInput } from '../currency/currency-order-by-relation-aggregate.input';
import { NotificationTypeOrderByRelationAggregateInput } from '../notification-type/notification-type-order-by-relation-aggregate.input';
import { ServiceOrderByRelationAggregateInput } from '../service/service-order-by-relation-aggregate.input';
import { directus_dashboardsOrderByRelationAggregateInput } from '../directus-dashboards/directus-dashboards-order-by-relation-aggregate.input';
import { directus_filesOrderByRelationAggregateInput } from '../directus-files/directus-files-order-by-relation-aggregate.input';
import { directus_flowsOrderByRelationAggregateInput } from '../directus-flows/directus-flows-order-by-relation-aggregate.input';
import { directus_notificationsOrderByRelationAggregateInput } from '../directus-notifications/directus-notifications-order-by-relation-aggregate.input';
import { directus_operationsOrderByRelationAggregateInput } from '../directus-operations/directus-operations-order-by-relation-aggregate.input';
import { directus_panelsOrderByRelationAggregateInput } from '../directus-panels/directus-panels-order-by-relation-aggregate.input';
import { directus_presetsOrderByRelationAggregateInput } from '../directus-presets/directus-presets-order-by-relation-aggregate.input';
import { directus_sessionsOrderByRelationAggregateInput } from '../directus-sessions/directus-sessions-order-by-relation-aggregate.input';
import { directus_sharesOrderByRelationAggregateInput } from '../directus-shares/directus-shares-order-by-relation-aggregate.input';
import { directus_rolesOrderByWithRelationAndSearchRelevanceInput } from '../directus-roles/directus-roles-order-by-with-relation-and-search-relevance.input';
import { directus_versionsOrderByRelationAggregateInput } from '../directus-versions/directus-versions-order-by-relation-aggregate.input';
import { directus_usersOrderByRelevanceInput } from './directus-users-order-by-relevance.input';

@InputType()
export class directus_usersOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    first_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tags?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    language?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tfa_secret?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last_access?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last_page?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    external_identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    auth_data?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email_notifications?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    appearance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    theme_dark?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    theme_light?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    theme_light_overrides?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    theme_dark_overrides?: keyof typeof SortOrder;

    @Field(() => CurrencyOrderByRelationAggregateInput, {nullable:true})
    Currency_Currency_user_createdTodirectus_users?: CurrencyOrderByRelationAggregateInput;

    @Field(() => CurrencyOrderByRelationAggregateInput, {nullable:true})
    Currency_Currency_user_updatedTodirectus_users?: CurrencyOrderByRelationAggregateInput;

    @Field(() => NotificationTypeOrderByRelationAggregateInput, {nullable:true})
    NotificationType_NotificationType_user_createdTodirectus_users?: NotificationTypeOrderByRelationAggregateInput;

    @Field(() => NotificationTypeOrderByRelationAggregateInput, {nullable:true})
    NotificationType_NotificationType_user_updatedTodirectus_users?: NotificationTypeOrderByRelationAggregateInput;

    @Field(() => ServiceOrderByRelationAggregateInput, {nullable:true})
    Service_Service_user_createdTodirectus_users?: ServiceOrderByRelationAggregateInput;

    @Field(() => ServiceOrderByRelationAggregateInput, {nullable:true})
    Service_Service_user_updatedTodirectus_users?: ServiceOrderByRelationAggregateInput;

    @Field(() => directus_dashboardsOrderByRelationAggregateInput, {nullable:true})
    directus_dashboards?: directus_dashboardsOrderByRelationAggregateInput;

    @Field(() => directus_filesOrderByRelationAggregateInput, {nullable:true})
    directus_files_directus_files_modified_byTodirectus_users?: directus_filesOrderByRelationAggregateInput;

    @Field(() => directus_filesOrderByRelationAggregateInput, {nullable:true})
    directus_files_directus_files_uploaded_byTodirectus_users?: directus_filesOrderByRelationAggregateInput;

    @Field(() => directus_flowsOrderByRelationAggregateInput, {nullable:true})
    directus_flows?: directus_flowsOrderByRelationAggregateInput;

    @Field(() => directus_notificationsOrderByRelationAggregateInput, {nullable:true})
    directus_notifications_directus_notifications_recipientTodirectus_users?: directus_notificationsOrderByRelationAggregateInput;

    @Field(() => directus_notificationsOrderByRelationAggregateInput, {nullable:true})
    directus_notifications_directus_notifications_senderTodirectus_users?: directus_notificationsOrderByRelationAggregateInput;

    @Field(() => directus_operationsOrderByRelationAggregateInput, {nullable:true})
    directus_operations?: directus_operationsOrderByRelationAggregateInput;

    @Field(() => directus_panelsOrderByRelationAggregateInput, {nullable:true})
    directus_panels?: directus_panelsOrderByRelationAggregateInput;

    @Field(() => directus_presetsOrderByRelationAggregateInput, {nullable:true})
    directus_presets?: directus_presetsOrderByRelationAggregateInput;

    @Field(() => directus_sessionsOrderByRelationAggregateInput, {nullable:true})
    directus_sessions?: directus_sessionsOrderByRelationAggregateInput;

    @Field(() => directus_sharesOrderByRelationAggregateInput, {nullable:true})
    directus_shares?: directus_sharesOrderByRelationAggregateInput;

    @Field(() => directus_rolesOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_roles?: directus_rolesOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_versionsOrderByRelationAggregateInput, {nullable:true})
    directus_versions_directus_versions_user_createdTodirectus_users?: directus_versionsOrderByRelationAggregateInput;

    @Field(() => directus_versionsOrderByRelationAggregateInput, {nullable:true})
    directus_versions_directus_versions_user_updatedTodirectus_users?: directus_versionsOrderByRelationAggregateInput;

    @Field(() => directus_usersOrderByRelevanceInput, {nullable:true})
    _relevance?: directus_usersOrderByRelevanceInput;
}
