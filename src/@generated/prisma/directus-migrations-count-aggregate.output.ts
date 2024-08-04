import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_migrationsCountAggregate {
  @Field(() => Int, { nullable: false })
  version!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @Field(() => Int, { nullable: false })
  timestamp!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
