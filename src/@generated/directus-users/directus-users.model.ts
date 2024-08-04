import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Currency } from '../currency/currency.model';
import { NotificationType } from '../notification-type/notification-type.model';
import { Service } from '../service/service.model';
import { directus_dashboards } from '../directus-dashboards/directus-dashboards.model';
import { directus_files } from '../directus-files/directus-files.model';
import { directus_flows } from '../directus-flows/directus-flows.model';
import { directus_notifications } from '../directus-notifications/directus-notifications.model';
import { directus_operations } from '../directus-operations/directus-operations.model';
import { directus_panels } from '../directus-panels/directus-panels.model';
import { directus_presets } from '../directus-presets/directus-presets.model';
import { directus_sessions } from '../directus-sessions/directus-sessions.model';
import { directus_shares } from '../directus-shares/directus-shares.model';
import { directus_roles } from '../directus-roles/directus-roles.model';
import { directus_versions } from '../directus-versions/directus-versions.model';
import { Directus_usersCount } from '../prisma/directus-users-count.output';

@ObjectType()
export class directus_users {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  first_name!: string | null;

  @Field(() => String, { nullable: true })
  last_name!: string | null;

  @Field(() => String, { nullable: true })
  email!: string | null;

  @Field(() => String, { nullable: true })
  password!: string | null;

  @Field(() => String, { nullable: true })
  location!: string | null;

  @Field(() => String, { nullable: true })
  title!: string | null;

  @Field(() => String, { nullable: true })
  description!: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  tags!: any | null;

  @Field(() => String, { nullable: true })
  avatar!: string | null;

  @Field(() => String, { nullable: true })
  language!: string | null;

  @Field(() => String, { nullable: true })
  tfa_secret!: string | null;

  @Field(() => String, { nullable: false, defaultValue: 'active' })
  status!: string;

  @Field(() => String, { nullable: true })
  role!: string | null;

  @Field(() => String, { nullable: true })
  token!: string | null;

  @Field(() => Date, { nullable: true })
  last_access!: Date | null;

  @Field(() => String, { nullable: true })
  last_page!: string | null;

  @Field(() => String, { nullable: false, defaultValue: 'default' })
  provider!: string;

  @Field(() => String, { nullable: true })
  external_identifier!: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  auth_data!: any | null;

  @Field(() => Boolean, { nullable: true, defaultValue: true })
  email_notifications!: boolean | null;

  @Field(() => String, { nullable: true })
  appearance!: string | null;

  @Field(() => String, { nullable: true })
  theme_dark!: string | null;

  @Field(() => String, { nullable: true })
  theme_light!: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  theme_light_overrides!: any | null;

  @Field(() => GraphQLJSON, { nullable: true })
  theme_dark_overrides!: any | null;

  @Field(() => [Currency], { nullable: true })
  Currency_Currency_user_createdTodirectus_users?: Array<Currency>;

  @Field(() => [Currency], { nullable: true })
  Currency_Currency_user_updatedTodirectus_users?: Array<Currency>;

  @Field(() => [NotificationType], { nullable: true })
  NotificationType_NotificationType_user_createdTodirectus_users?: Array<NotificationType>;

  @Field(() => [NotificationType], { nullable: true })
  NotificationType_NotificationType_user_updatedTodirectus_users?: Array<NotificationType>;

  @Field(() => [Service], { nullable: true })
  Service_Service_user_createdTodirectus_users?: Array<Service>;

  @Field(() => [Service], { nullable: true })
  Service_Service_user_updatedTodirectus_users?: Array<Service>;

  @Field(() => [directus_dashboards], { nullable: true })
  directus_dashboards?: Array<directus_dashboards>;

  @Field(() => [directus_files], { nullable: true })
  directus_files_directus_files_modified_byTodirectus_users?: Array<directus_files>;

  @Field(() => [directus_files], { nullable: true })
  directus_files_directus_files_uploaded_byTodirectus_users?: Array<directus_files>;

  @Field(() => [directus_flows], { nullable: true })
  directus_flows?: Array<directus_flows>;

  @Field(() => [directus_notifications], { nullable: true })
  directus_notifications_directus_notifications_recipientTodirectus_users?: Array<directus_notifications>;

  @Field(() => [directus_notifications], { nullable: true })
  directus_notifications_directus_notifications_senderTodirectus_users?: Array<directus_notifications>;

  @Field(() => [directus_operations], { nullable: true })
  directus_operations?: Array<directus_operations>;

  @Field(() => [directus_panels], { nullable: true })
  directus_panels?: Array<directus_panels>;

  @Field(() => [directus_presets], { nullable: true })
  directus_presets?: Array<directus_presets>;

  @Field(() => [directus_sessions], { nullable: true })
  directus_sessions?: Array<directus_sessions>;

  @Field(() => [directus_shares], { nullable: true })
  directus_shares?: Array<directus_shares>;

  @Field(() => directus_roles, { nullable: true })
  directus_roles?: directus_roles | null;

  @Field(() => [directus_versions], { nullable: true })
  directus_versions_directus_versions_user_createdTodirectus_users?: Array<directus_versions>;

  @Field(() => [directus_versions], { nullable: true })
  directus_versions_directus_versions_user_updatedTodirectus_users?: Array<directus_versions>;

  @Field(() => Directus_usersCount, { nullable: false })
  _count?: Directus_usersCount;
}
