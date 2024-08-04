import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class directus_fields {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  collection!: string;

  @Field(() => String, { nullable: false })
  field!: string;

  @Field(() => String, { nullable: true })
  special!: string | null;

  @Field(() => String, { nullable: true })
  interface!: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  options!: any | null;

  @Field(() => String, { nullable: true })
  display!: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  display_options!: any | null;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  readonly!: boolean;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  hidden!: boolean;

  @Field(() => Int, { nullable: true })
  sort!: number | null;

  @Field(() => String, { nullable: true, defaultValue: 'full' })
  width!: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  translations!: any | null;

  @Field(() => String, { nullable: true })
  note!: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  conditions!: any | null;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  required!: boolean | null;

  @Field(() => String, { nullable: true })
  group!: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  validation!: any | null;

  @Field(() => String, { nullable: true })
  validation_message!: string | null;
}
