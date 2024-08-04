import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class directus_notificationsCreateManyDirectus_users_directus_notifications_senderTodirectus_usersInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Date, { nullable: true })
  timestamp?: Date | string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => String, { nullable: false })
  recipient!: string;

  @Field(() => String, { nullable: false })
  subject!: string;

  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => String, { nullable: true })
  collection?: string;

  @Field(() => String, { nullable: true })
  item?: string;
}
