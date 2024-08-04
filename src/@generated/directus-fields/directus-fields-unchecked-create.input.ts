import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class directus_fieldsUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  collection!: string;

  @Field(() => String, { nullable: false })
  field!: string;

  @Field(() => String, { nullable: true })
  special?: string;

  @Field(() => String, { nullable: true })
  interface?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  options?: any;

  @Field(() => String, { nullable: true })
  display?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  display_options?: any;

  @Field(() => Boolean, { nullable: true })
  readonly?: boolean;

  @Field(() => Boolean, { nullable: true })
  hidden?: boolean;

  @Field(() => Int, { nullable: true })
  sort?: number;

  @Field(() => String, { nullable: true })
  width?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  translations?: any;

  @Field(() => String, { nullable: true })
  note?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  conditions?: any;

  @Field(() => Boolean, { nullable: true })
  required?: boolean;

  @Field(() => String, { nullable: true })
  group?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  validation?: any;

  @Field(() => String, { nullable: true })
  validation_message?: string;
}
