import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_notificationsUpdateManyMutationInput } from '../directus-notifications/directus-notifications-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_notificationsWhereInput } from '../directus-notifications/directus-notifications-where.input';

@ArgsType()
export class UpdateManydirectusNotificationsArgs {
  @Field(() => directus_notificationsUpdateManyMutationInput, {
    nullable: false,
  })
  @Type(() => directus_notificationsUpdateManyMutationInput)
  data!: directus_notificationsUpdateManyMutationInput;

  @Field(() => directus_notificationsWhereInput, { nullable: true })
  @Type(() => directus_notificationsWhereInput)
  where?: directus_notificationsWhereInput;
}
