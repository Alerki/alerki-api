import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationTypeCreateInput } from './notification-type-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNotificationTypeArgs {
  @Field(() => NotificationTypeCreateInput, { nullable: false })
  @Type(() => NotificationTypeCreateInput)
  data!: NotificationTypeCreateInput;
}
