import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class directus_webhooksCreateInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  method?: string;

  @Field(() => String, { nullable: false })
  url!: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => Boolean, { nullable: true })
  data?: boolean;

  @Field(() => String, { nullable: false })
  actions!: string;

  @Field(() => String, { nullable: false })
  collections!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  headers?: any;
}
