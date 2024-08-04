import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LanguagesCountAggregate {
  @Field(() => Int, { nullable: false })
  code!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @Field(() => Int, { nullable: false })
  direction!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
