import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class directus_permissionsCreateManyInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  role?: string;

  @Field(() => String, { nullable: false })
  collection!: string;

  @Field(() => String, { nullable: false })
  action!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  permissions?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  validation?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  presets?: any;

  @Field(() => String, { nullable: true })
  fields?: string;
}
