import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_revisionsCount {
  @Field(() => Int, { nullable: false })
  other_directus_revisions!: number;
}
