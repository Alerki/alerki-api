import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_collectionsWhereInput } from '../directus-collections/directus-collections-where.input';

@InputType()
export class Directus_collectionsRelationFilter {
  @Field(() => directus_collectionsWhereInput, { nullable: true })
  is?: directus_collectionsWhereInput;

  @Field(() => directus_collectionsWhereInput, { nullable: true })
  isNot?: directus_collectionsWhereInput;
}
