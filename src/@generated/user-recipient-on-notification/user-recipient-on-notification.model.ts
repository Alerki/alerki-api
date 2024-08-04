import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Notification } from '../notification/notification.model';
import { User } from '../user/user.model';

@ObjectType()
export class UserRecipientOnNotification {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: true })
  date_created!: Date | null;

  @Field(() => Date, { nullable: true })
  date_updated!: Date | null;

  @Field(() => String, { nullable: false })
  user!: string;

  @Field(() => String, { nullable: false })
  notification!: string;

  @Field(() => Notification, { nullable: false })
  Notification?: Notification;

  @Field(() => User, { nullable: false })
  User?: User;
}
