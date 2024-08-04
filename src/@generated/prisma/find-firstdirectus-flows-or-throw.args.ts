import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_flowsWhereInput } from '../directus-flows/directus-flows-where.input';
import { Type } from 'class-transformer';
import { directus_flowsOrderByWithRelationAndSearchRelevanceInput } from '../directus-flows/directus-flows-order-by-with-relation-and-search-relevance.input';
import { directus_flowsWhereUniqueInput } from '../directus-flows/directus-flows-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_flowsScalarFieldEnum } from './directus-flows-scalar-field.enum';

@ArgsType()
export class FindFirstdirectusFlowsOrThrowArgs {
  @Field(() => directus_flowsWhereInput, { nullable: true })
  @Type(() => directus_flowsWhereInput)
  where?: directus_flowsWhereInput;

  @Field(() => [directus_flowsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<directus_flowsOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => directus_flowsWhereUniqueInput, { nullable: true })
  cursor?: directus_flowsWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [Directus_flowsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof Directus_flowsScalarFieldEnum>;
}
