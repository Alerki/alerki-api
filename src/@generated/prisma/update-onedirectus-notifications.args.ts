import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_notificationsUpdateInput } from '../directus-notifications/directus-notifications-update.input';
import { Type } from 'class-transformer';
import { directus_notificationsWhereUniqueInput } from '../directus-notifications/directus-notifications-where-unique.input';

@ArgsType()
export class UpdateOnedirectusNotificationsArgs {
  @Field(() => directus_notificationsUpdateInput, { nullable: false })
  @Type(() => directus_notificationsUpdateInput)
  data!: directus_notificationsUpdateInput;

  @Field(() => directus_notificationsWhereUniqueInput, { nullable: false })
  @Type(() => directus_notificationsWhereUniqueInput)
  where!: directus_notificationsWhereUniqueInput;
}
