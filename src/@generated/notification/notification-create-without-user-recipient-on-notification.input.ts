import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NotificationCreateWithoutUserRecipientOnNotificationInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;
}
