import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { directus_roles } from '../directus-roles/directus-roles.model';

@ObjectType()
export class directus_permissions {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: true })
  role!: string | null;

  @Field(() => String, { nullable: false })
  collection!: string;

  @Field(() => String, { nullable: false })
  action!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  permissions!: any | null;

  @Field(() => GraphQLJSON, { nullable: true })
  validation!: any | null;

  @Field(() => GraphQLJSON, { nullable: true })
  presets!: any | null;

  @Field(() => String, { nullable: true })
  fields!: string | null;

  @Field(() => directus_roles, { nullable: true })
  directus_roles?: directus_roles | null;
}
