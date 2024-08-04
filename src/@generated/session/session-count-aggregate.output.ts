import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SessionCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  date_created!: number;

  @Field(() => Int, { nullable: false })
  date_updated!: number;

  @Field(() => Int, { nullable: false })
  deviceName!: number;

  @Field(() => Int, { nullable: false })
  refreshToken!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
