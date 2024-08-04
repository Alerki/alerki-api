import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Directus_panelsAvgAggregate {
  @Field(() => Float, { nullable: true })
  position_x?: number;

  @Field(() => Float, { nullable: true })
  position_y?: number;

  @Field(() => Float, { nullable: true })
  width?: number;

  @Field(() => Float, { nullable: true })
  height?: number;
}
