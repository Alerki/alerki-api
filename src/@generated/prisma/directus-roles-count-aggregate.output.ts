import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_rolesCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @Field(() => Int, { nullable: false })
  icon!: number;

  @Field(() => Int, { nullable: false })
  description!: number;

  @Field(() => Int, { nullable: false })
  ip_access!: number;

  @Field(() => Int, { nullable: false })
  enforce_tfa!: number;

  @Field(() => Int, { nullable: false })
  admin_access!: number;

  @Field(() => Int, { nullable: false })
  app_access!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
