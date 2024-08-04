import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationTypeCreateManyInput } from './notification-type-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNotificationTypeArgs {
  @Field(() => [NotificationTypeCreateManyInput], { nullable: false })
  @Type(() => NotificationTypeCreateManyInput)
  data!: Array<NotificationTypeCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
