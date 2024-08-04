import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_foldersWhereInput } from '../directus-folders/directus-folders-where.input';
import { Type } from 'class-transformer';
import { directus_foldersOrderByWithRelationAndSearchRelevanceInput } from '../directus-folders/directus-folders-order-by-with-relation-and-search-relevance.input';
import { directus_foldersWhereUniqueInput } from '../directus-folders/directus-folders-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_foldersScalarFieldEnum } from './directus-folders-scalar-field.enum';

@ArgsType()
export class FindManydirectusFoldersArgs {
  @Field(() => directus_foldersWhereInput, { nullable: true })
  @Type(() => directus_foldersWhereInput)
  where?: directus_foldersWhereInput;

  @Field(() => [directus_foldersOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<directus_foldersOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => directus_foldersWhereUniqueInput, { nullable: true })
  cursor?: directus_foldersWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [Directus_foldersScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof Directus_foldersScalarFieldEnum>;
}
