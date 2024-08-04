import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_notificationsCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  timestamp!: number;

  @Field(() => Int, { nullable: false })
  status!: number;

  @Field(() => Int, { nullable: false })
  recipient!: number;

  @Field(() => Int, { nullable: false })
  sender!: number;

  @Field(() => Int, { nullable: false })
  subject!: number;

  @Field(() => Int, { nullable: false })
  message!: number;

  @Field(() => Int, { nullable: false })
  collection!: number;

  @Field(() => Int, { nullable: false })
  item!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
