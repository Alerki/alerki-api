import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationTypUncheckedCreateInput } from './notification-typ-unchecked-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNotificationTypArgs {
  @Field(() => NotificationTypUncheckedCreateInput, { nullable: true })
  @Type(() => NotificationTypUncheckedCreateInput)
  data?: NotificationTypUncheckedCreateInput;
}
