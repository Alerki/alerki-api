import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class directus_webhooks {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false, defaultValue: 'POST' })
  method!: string;

  @Field(() => String, { nullable: false })
  url!: string;

  @Field(() => String, { nullable: false, defaultValue: 'active' })
  status!: string;

  @Field(() => Boolean, { nullable: false, defaultValue: true })
  data!: boolean;

  @Field(() => String, { nullable: false })
  actions!: string;

  @Field(() => String, { nullable: false })
  collections!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  headers!: any | null;
}
