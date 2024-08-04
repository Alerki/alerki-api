import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Directus_filesAvgAggregate {
  @Field(() => Float, { nullable: true })
  filesize?: number;

  @Field(() => Float, { nullable: true })
  width?: number;

  @Field(() => Float, { nullable: true })
  height?: number;

  @Field(() => Float, { nullable: true })
  duration?: number;

  @Field(() => Float, { nullable: true })
  focal_point_x?: number;

  @Field(() => Float, { nullable: true })
  focal_point_y?: number;
}
