import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_fieldsWhereInput } from '../directus-fields/directus-fields-where.input';
import { Type } from 'class-transformer';
import { directus_fieldsOrderByWithRelationAndSearchRelevanceInput } from '../directus-fields/directus-fields-order-by-with-relation-and-search-relevance.input';
import { directus_fieldsWhereUniqueInput } from '../directus-fields/directus-fields-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_fieldsScalarFieldEnum } from './directus-fields-scalar-field.enum';

@ArgsType()
export class FindManydirectusFieldsArgs {
  @Field(() => directus_fieldsWhereInput, { nullable: true })
  @Type(() => directus_fieldsWhereInput)
  where?: directus_fieldsWhereInput;

  @Field(() => [directus_fieldsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<directus_fieldsOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => directus_fieldsWhereUniqueInput, { nullable: true })
  cursor?: directus_fieldsWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [Directus_fieldsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof Directus_fieldsScalarFieldEnum>;
}
