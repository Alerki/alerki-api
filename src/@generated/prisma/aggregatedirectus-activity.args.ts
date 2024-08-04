import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_activityWhereInput } from '../directus-activity/directus-activity-where.input';
import { Type } from 'class-transformer';
import { directus_activityOrderByWithRelationAndSearchRelevanceInput } from '../directus-activity/directus-activity-order-by-with-relation-and-search-relevance.input';
import { directus_activityWhereUniqueInput } from '../directus-activity/directus-activity-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatedirectusActivityArgs {
  @Field(() => directus_activityWhereInput, { nullable: true })
  @Type(() => directus_activityWhereInput)
  where?: directus_activityWhereInput;

  @Field(() => [directus_activityOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<directus_activityOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => directus_activityWhereUniqueInput, { nullable: true })
  cursor?: directus_activityWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
