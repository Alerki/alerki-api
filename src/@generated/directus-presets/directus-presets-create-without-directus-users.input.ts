import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { directus_rolesCreateNestedOneWithoutDirectus_presetsInput } from '../directus-roles/directus-roles-create-nested-one-without-directus-presets.input';

@InputType()
export class directus_presetsCreateWithoutDirectus_usersInput {
  @Field(() => String, { nullable: true })
  bookmark?: string;

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

  @Field(() => directus_rolesCreateNestedOneWithoutDirectus_presetsInput, {
    nullable: true,
  })
  directus_roles?: directus_rolesCreateNestedOneWithoutDirectus_presetsInput;
}
