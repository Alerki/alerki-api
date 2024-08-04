import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationTypUncheckedUpdateManyInput } from './notification-typ-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { NotificationTypWhereInput } from './notification-typ-where.input';

@ArgsType()
export class UpdateManyNotificationTypArgs {
  @Field(() => NotificationTypUncheckedUpdateManyInput, { nullable: false })
  @Type(() => NotificationTypUncheckedUpdateManyInput)
  data!: NotificationTypUncheckedUpdateManyInput;

  @Field(() => NotificationTypWhereInput, { nullable: true })
  @Type(() => NotificationTypWhereInput)
  where?: NotificationTypWhereInput;
}
