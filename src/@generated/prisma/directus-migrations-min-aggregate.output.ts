import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Directus_migrationsMinAggregate {
  @Field(() => String, { nullable: true })
  version?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Date, { nullable: true })
  timestamp?: Date | string;
}
