import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationScalarWhereInput } from './notification-scalar-where.input';
import { Type } from 'class-transformer';
import { NotificationUpdateManyMutationInput } from './notification-update-many-mutation.input';

@InputType()
export class NotificationUpdateManyWithWhereWithoutNotificationTypeInput {
  @Field(() => NotificationScalarWhereInput, { nullable: false })
  @Type(() => NotificationScalarWhereInput)
  where!: NotificationScalarWhereInput;

  @Field(() => NotificationUpdateManyMutationInput, { nullable: false })
  @Type(() => NotificationUpdateManyMutationInput)
  data!: NotificationUpdateManyMutationInput;
}
