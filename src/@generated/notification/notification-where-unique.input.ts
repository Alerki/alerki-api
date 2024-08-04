import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NotificationWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
}
