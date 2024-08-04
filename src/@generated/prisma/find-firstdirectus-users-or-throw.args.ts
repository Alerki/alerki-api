import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_usersWhereInput } from '../directus-users/directus-users-where.input';
import { Type } from 'class-transformer';
import { directus_usersOrderByWithRelationAndSearchRelevanceInput } from '../directus-users/directus-users-order-by-with-relation-and-search-relevance.input';
import { directus_usersWhereUniqueInput } from '../directus-users/directus-users-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_usersScalarFieldEnum } from './directus-users-scalar-field.enum';

@ArgsType()
export class FindFirstdirectusUsersOrThrowArgs {
  @Field(() => directus_usersWhereInput, { nullable: true })
  @Type(() => directus_usersWhereInput)
  where?: directus_usersWhereInput;

  @Field(() => [directus_usersOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<directus_usersOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => directus_usersWhereUniqueInput, { nullable: true })
  cursor?: directus_usersWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [Directus_usersScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof Directus_usersScalarFieldEnum>;
}
