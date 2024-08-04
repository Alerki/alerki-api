import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_filesSumAggregate {
  @Field(() => String, { nullable: true })
  filesize?: bigint | number;

  @Field(() => Int, { nullable: true })
  width?: number;

  @Field(() => Int, { nullable: true })
  height?: number;

  @Field(() => Int, { nullable: true })
  duration?: number;

  @Field(() => Int, { nullable: true })
  focal_point_x?: number;

  @Field(() => Int, { nullable: true })
  focal_point_y?: number;
}
