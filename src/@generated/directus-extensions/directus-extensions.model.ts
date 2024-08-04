import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class directus_extensions {
  @Field(() => Boolean, { nullable: false, defaultValue: true })
  enabled!: boolean;

  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  folder!: string;

  @Field(() => String, { nullable: false })
  source!: string;

  @Field(() => String, { nullable: true })
  bundle!: string | null;
}
