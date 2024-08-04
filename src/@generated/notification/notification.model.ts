import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { NotificationType } from '../notification-type/notification-type.model';

@ObjectType()
export class Notification {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: true })
  date_created!: Date | null;

  @Field(() => Date, { nullable: true })
  date_updated!: Date | null;

  @Field(() => String, { nullable: false })
  type!: string;

  @Field(() => NotificationType, { nullable: false })
  NotificationType?: NotificationType;
}
