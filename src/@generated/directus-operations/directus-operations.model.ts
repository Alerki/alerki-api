import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { directus_flows } from '../directus-flows/directus-flows.model';
import { directus_users } from '../directus-users/directus-users.model';

@ObjectType()
export class directus_operations {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  name!: string | null;

  @Field(() => String, { nullable: false })
  key!: string;

  @Field(() => String, { nullable: false })
  type!: string;

  @Field(() => Int, { nullable: false })
  position_x!: number;

  @Field(() => Int, { nullable: false })
  position_y!: number;

  @Field(() => GraphQLJSON, { nullable: true })
  options!: any | null;

  @Field(() => String, { nullable: true })
  resolve!: string | null;

  @Field(() => String, { nullable: true })
  reject!: string | null;

  @Field(() => String, { nullable: false })
  flow!: string;

  @Field(() => Date, { nullable: true })
  date_created!: Date | null;

  @Field(() => String, { nullable: true })
  user_created!: string | null;

  @Field(() => directus_flows, { nullable: false })
  directus_flows?: directus_flows;

  @Field(() => directus_operations, { nullable: true })
  directus_operations_directus_operations_rejectTodirectus_operations?: directus_operations | null;

  @Field(() => directus_operations, { nullable: true })
  other_directus_operations_directus_operations_rejectTodirectus_operations?: directus_operations | null;

  @Field(() => directus_operations, { nullable: true })
  directus_operations_directus_operations_resolveTodirectus_operations?: directus_operations | null;

  @Field(() => directus_operations, { nullable: true })
  other_directus_operations_directus_operations_resolveTodirectus_operations?: directus_operations | null;

  @Field(() => directus_users, { nullable: true })
  directus_users?: directus_users | null;
}
