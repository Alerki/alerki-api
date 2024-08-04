import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_usersCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  first_name!: number;

  @Field(() => Int, { nullable: false })
  last_name!: number;

  @Field(() => Int, { nullable: false })
  email!: number;

  @Field(() => Int, { nullable: false })
  password!: number;

  @Field(() => Int, { nullable: false })
  location!: number;

  @Field(() => Int, { nullable: false })
  title!: number;

  @Field(() => Int, { nullable: false })
  description!: number;

  @Field(() => Int, { nullable: false })
  tags!: number;

  @Field(() => Int, { nullable: false })
  avatar!: number;

  @Field(() => Int, { nullable: false })
  language!: number;

  @Field(() => Int, { nullable: false })
  tfa_secret!: number;

  @Field(() => Int, { nullable: false })
  status!: number;

  @Field(() => Int, { nullable: false })
  role!: number;

  @Field(() => Int, { nullable: false })
  token!: number;

  @Field(() => Int, { nullable: false })
  last_access!: number;

  @Field(() => Int, { nullable: false })
  last_page!: number;

  @Field(() => Int, { nullable: false })
  provider!: number;

  @Field(() => Int, { nullable: false })
  external_identifier!: number;

  @Field(() => Int, { nullable: false })
  auth_data!: number;

  @Field(() => Int, { nullable: false })
  email_notifications!: number;

  @Field(() => Int, { nullable: false })
  appearance!: number;

  @Field(() => Int, { nullable: false })
  theme_dark!: number;

  @Field(() => Int, { nullable: false })
  theme_light!: number;

  @Field(() => Int, { nullable: false })
  theme_light_overrides!: number;

  @Field(() => Int, { nullable: false })
  theme_dark_overrides!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
