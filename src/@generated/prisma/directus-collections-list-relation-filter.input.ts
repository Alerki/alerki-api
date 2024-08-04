import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_collectionsWhereInput } from '../directus-collections/directus-collections-where.input';

@InputType()
export class Directus_collectionsListRelationFilter {
  @Field(() => directus_collectionsWhereInput, { nullable: true })
  every?: directus_collectionsWhereInput;

  @Field(() => directus_collectionsWhereInput, { nullable: true })
  some?: directus_collectionsWhereInput;

  @Field(() => directus_collectionsWhereInput, { nullable: true })
  none?: directus_collectionsWhereInput;
}
