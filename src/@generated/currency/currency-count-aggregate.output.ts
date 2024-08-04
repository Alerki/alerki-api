import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CurrencyCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  status!: number;

  @Field(() => Int, { nullable: false })
  sort!: number;

  @Field(() => Int, { nullable: false })
  user_created!: number;

  @Field(() => Int, { nullable: false })
  date_created!: number;

  @Field(() => Int, { nullable: false })
  user_updated!: number;

  @Field(() => Int, { nullable: false })
  date_updated!: number;

  @Field(() => Int, { nullable: false })
  code!: number;

  @Field(() => Int, { nullable: false })
  character!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
