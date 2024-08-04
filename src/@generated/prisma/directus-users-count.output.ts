import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_usersCount {
  @Field(() => Int, { nullable: false })
  Currency_Currency_user_createdTodirectus_users!: number;

  @Field(() => Int, { nullable: false })
  Currency_Currency_user_updatedTodirectus_users!: number;

  @Field(() => Int, { nullable: false })
  NotificationType_NotificationType_user_createdTodirectus_users!: number;

  @Field(() => Int, { nullable: false })
  NotificationType_NotificationType_user_updatedTodirectus_users!: number;

  @Field(() => Int, { nullable: false })
  Service_Service_user_createdTodirectus_users!: number;

  @Field(() => Int, { nullable: false })
  Service_Service_user_updatedTodirectus_users!: number;

  @Field(() => Int, { nullable: false })
  directus_dashboards!: number;

  @Field(() => Int, { nullable: false })
  directus_files_directus_files_modified_byTodirectus_users!: number;

  @Field(() => Int, { nullable: false })
  directus_files_directus_files_uploaded_byTodirectus_users!: number;

  @Field(() => Int, { nullable: false })
  directus_flows!: number;

  @Field(() => Int, { nullable: false })
  directus_notifications_directus_notifications_recipientTodirectus_users!: number;

  @Field(() => Int, { nullable: false })
  directus_notifications_directus_notifications_senderTodirectus_users!: number;

  @Field(() => Int, { nullable: false })
  directus_operations!: number;

  @Field(() => Int, { nullable: false })
  directus_panels!: number;

  @Field(() => Int, { nullable: false })
  directus_presets!: number;

  @Field(() => Int, { nullable: false })
  directus_sessions!: number;

  @Field(() => Int, { nullable: false })
  directus_shares!: number;

  @Field(() => Int, { nullable: false })
  directus_versions_directus_versions_user_createdTodirectus_users!: number;

  @Field(() => Int, { nullable: false })
  directus_versions_directus_versions_user_updatedTodirectus_users!: number;
}
