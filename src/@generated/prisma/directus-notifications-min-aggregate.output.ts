import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_notificationsMinAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Date, { nullable: true })
  timestamp?: Date | string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => String, { nullable: true })
  recipient?: string;

  @Field(() => String, { nullable: true })
  sender?: string;

  @Field(() => String, { nullable: true })
  subject?: string;

  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => String, { nullable: true })
  collection?: string;

  @Field(() => String, { nullable: true })
  item?: string;
}
