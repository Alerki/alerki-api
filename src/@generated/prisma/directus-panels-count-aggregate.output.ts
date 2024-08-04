import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_panelsCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  dashboard!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @Field(() => Int, { nullable: false })
  icon!: number;

  @Field(() => Int, { nullable: false })
  color!: number;

  @Field(() => Int, { nullable: false })
  show_header!: number;

  @Field(() => Int, { nullable: false })
  note!: number;

  @Field(() => Int, { nullable: false })
  type!: number;

  @Field(() => Int, { nullable: false })
  position_x!: number;

  @Field(() => Int, { nullable: false })
  position_y!: number;

  @Field(() => Int, { nullable: false })
  width!: number;

  @Field(() => Int, { nullable: false })
  height!: number;

  @Field(() => Int, { nullable: false })
  options!: number;

  @Field(() => Int, { nullable: false })
  date_created!: number;

  @Field(() => Int, { nullable: false })
  user_created!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
