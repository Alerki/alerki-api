import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class directus_presetsUncheckedCreateWithoutDirectus_rolesInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  bookmark?: string;

  @Field(() => String, { nullable: true })
  user?: string;

  @Field(() => String, { nullable: true })
  collection?: string;

  @Field(() => String, { nullable: true })
  search?: string;

  @Field(() => String, { nullable: true })
  layout?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  layout_query?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  layout_options?: any;

  @Field(() => Int, { nullable: true })
  refresh_interval?: number;

  @Field(() => GraphQLJSON, { nullable: true })
  filter?: any;

  @Field(() => String, { nullable: true })
  icon?: string;

  @Field(() => String, { nullable: true })
  color?: string;
}
