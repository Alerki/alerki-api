import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_notificationsScalarWhereInput } from './directus-notifications-scalar-where.input';
import { Type } from 'class-transformer';
import { directus_notificationsUpdateManyMutationInput } from './directus-notifications-update-many-mutation.input';

@InputType()
export class directus_notificationsUpdateManyWithWhereWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput {
  @Field(() => directus_notificationsScalarWhereInput, { nullable: false })
  @Type(() => directus_notificationsScalarWhereInput)
  where!: directus_notificationsScalarWhereInput;

  @Field(() => directus_notificationsUpdateManyMutationInput, {
    nullable: false,
  })
  @Type(() => directus_notificationsUpdateManyMutationInput)
  data!: directus_notificationsUpdateManyMutationInput;
}
