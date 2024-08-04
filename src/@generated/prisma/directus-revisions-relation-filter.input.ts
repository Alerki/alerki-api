import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsWhereInput } from '../directus-revisions/directus-revisions-where.input';

@InputType()
export class Directus_revisionsRelationFilter {
  @Field(() => directus_revisionsWhereInput, { nullable: true })
  is?: directus_revisionsWhereInput;

  @Field(() => directus_revisionsWhereInput, { nullable: true })
  isNot?: directus_revisionsWhereInput;
}
