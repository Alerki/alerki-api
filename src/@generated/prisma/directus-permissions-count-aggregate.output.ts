import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_permissionsCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  role!: number;

  @Field(() => Int, { nullable: false })
  collection!: number;

  @Field(() => Int, { nullable: false })
  action!: number;

  @Field(() => Int, { nullable: false })
  permissions!: number;

  @Field(() => Int, { nullable: false })
  validation!: number;

  @Field(() => Int, { nullable: false })
  presets!: number;

  @Field(() => Int, { nullable: false })
  fields!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
