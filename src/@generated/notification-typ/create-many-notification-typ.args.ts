import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationTypCreateManyInput } from './notification-typ-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNotificationTypArgs {
  @Field(() => [NotificationTypCreateManyInput], { nullable: false })
  @Type(() => NotificationTypCreateManyInput)
  data!: Array<NotificationTypCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
