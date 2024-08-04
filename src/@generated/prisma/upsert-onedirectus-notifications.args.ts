import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_notificationsWhereUniqueInput } from '../directus-notifications/directus-notifications-where-unique.input';
import { Type } from 'class-transformer';
import { directus_notificationsCreateInput } from '../directus-notifications/directus-notifications-create.input';
import { directus_notificationsUpdateInput } from '../directus-notifications/directus-notifications-update.input';

@ArgsType()
export class UpsertOnedirectusNotificationsArgs {
  @Field(() => directus_notificationsWhereUniqueInput, { nullable: false })
  @Type(() => directus_notificationsWhereUniqueInput)
  where!: directus_notificationsWhereUniqueInput;

  @Field(() => directus_notificationsCreateInput, { nullable: false })
  @Type(() => directus_notificationsCreateInput)
  create!: directus_notificationsCreateInput;

  @Field(() => directus_notificationsUpdateInput, { nullable: false })
  @Type(() => directus_notificationsUpdateInput)
  update!: directus_notificationsUpdateInput;
}
