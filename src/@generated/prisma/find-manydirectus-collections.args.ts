import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_collectionsWhereInput } from '../directus-collections/directus-collections-where.input';
import { Type } from 'class-transformer';
import { directus_collectionsOrderByWithRelationAndSearchRelevanceInput } from '../directus-collections/directus-collections-order-by-with-relation-and-search-relevance.input';
import { directus_collectionsWhereUniqueInput } from '../directus-collections/directus-collections-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_collectionsScalarFieldEnum } from './directus-collections-scalar-field.enum';

@ArgsType()
export class FindManydirectusCollectionsArgs {
  @Field(() => directus_collectionsWhereInput, { nullable: true })
  @Type(() => directus_collectionsWhereInput)
  where?: directus_collectionsWhereInput;

  @Field(
    () => [directus_collectionsOrderByWithRelationAndSearchRelevanceInput],
    { nullable: true },
  )
  orderBy?: Array<directus_collectionsOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => directus_collectionsWhereUniqueInput, { nullable: true })
  cursor?: directus_collectionsWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [Directus_collectionsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof Directus_collectionsScalarFieldEnum>;
}
