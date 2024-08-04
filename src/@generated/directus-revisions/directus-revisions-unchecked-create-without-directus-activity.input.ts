import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { directus_revisionsUncheckedCreateNestedManyWithoutDirectus_revisionsInput } from './directus-revisions-unchecked-create-nested-many-without-directus-revisions.input';

@InputType()
export class directus_revisionsUncheckedCreateWithoutDirectus_activityInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  collection!: string;

  @Field(() => String, { nullable: false })
  item!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  data?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  delta?: any;

  @Field(() => Int, { nullable: true })
  parent?: number;

  @Field(() => String, { nullable: true })
  version?: string;

  @Field(
    () =>
      directus_revisionsUncheckedCreateNestedManyWithoutDirectus_revisionsInput,
    { nullable: true },
  )
  other_directus_revisions?: directus_revisionsUncheckedCreateNestedManyWithoutDirectus_revisionsInput;
}
