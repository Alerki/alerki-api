import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecipientOnNotificationUpdateManyMutationInput } from './user-recipient-on-notification-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserRecipientOnNotificationWhereInput } from './user-recipient-on-notification-where.input';

@ArgsType()
export class UpdateManyUserRecipientOnNotificationArgs {
  @Field(() => UserRecipientOnNotificationUpdateManyMutationInput, {
    nullable: false,
  })
  @Type(() => UserRecipientOnNotificationUpdateManyMutationInput)
  data!: UserRecipientOnNotificationUpdateManyMutationInput;

  @Field(() => UserRecipientOnNotificationWhereInput, { nullable: true })
  @Type(() => UserRecipientOnNotificationWhereInput)
  where?: UserRecipientOnNotificationWhereInput;
}
