import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsWhereInput } from '../directus-revisions/directus-revisions-where.input';

@InputType()
export class Directus_revisionsListRelationFilter {
  @Field(() => directus_revisionsWhereInput, { nullable: true })
  every?: directus_revisionsWhereInput;

  @Field(() => directus_revisionsWhereInput, { nullable: true })
  some?: directus_revisionsWhereInput;

  @Field(() => directus_revisionsWhereInput, { nullable: true })
  none?: directus_revisionsWhereInput;
}
