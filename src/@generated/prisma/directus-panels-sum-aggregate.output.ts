import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_panelsSumAggregate {
  @Field(() => Int, { nullable: true })
  position_x?: number;

  @Field(() => Int, { nullable: true })
  position_y?: number;

  @Field(() => Int, { nullable: true })
  width?: number;

  @Field(() => Int, { nullable: true })
  height?: number;
}
