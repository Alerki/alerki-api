import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationCreateInput } from './notification-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNotificationArgs {
  @Field(() => NotificationCreateInput, { nullable: false })
  @Type(() => NotificationCreateInput)
  data!: NotificationCreateInput;
}
