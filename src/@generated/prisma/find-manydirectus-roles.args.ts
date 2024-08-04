import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_rolesWhereInput } from '../directus-roles/directus-roles-where.input';
import { Type } from 'class-transformer';
import { directus_rolesOrderByWithRelationAndSearchRelevanceInput } from '../directus-roles/directus-roles-order-by-with-relation-and-search-relevance.input';
import { directus_rolesWhereUniqueInput } from '../directus-roles/directus-roles-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_rolesScalarFieldEnum } from './directus-roles-scalar-field.enum';

@ArgsType()
export class FindManydirectusRolesArgs {
  @Field(() => directus_rolesWhereInput, { nullable: true })
  @Type(() => directus_rolesWhereInput)
  where?: directus_rolesWhereInput;

  @Field(() => [directus_rolesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<directus_rolesOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => directus_rolesWhereUniqueInput, { nullable: true })
  cursor?: directus_rolesWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [Directus_rolesScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof Directus_rolesScalarFieldEnum>;
}
