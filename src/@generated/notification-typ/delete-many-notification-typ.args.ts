import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationTypWhereInput } from './notification-typ-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNotificationTypArgs {
  @Field(() => NotificationTypWhereInput, { nullable: true })
  @Type(() => NotificationTypWhereInput)
  where?: NotificationTypWhereInput;
}
