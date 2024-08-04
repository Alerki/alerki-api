import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_presetsWhereInput } from '../directus-presets/directus-presets-where.input';
import { Type } from 'class-transformer';
import { directus_presetsOrderByWithRelationAndSearchRelevanceInput } from '../directus-presets/directus-presets-order-by-with-relation-and-search-relevance.input';
import { directus_presetsWhereUniqueInput } from '../directus-presets/directus-presets-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatedirectusPresetsArgs {
  @Field(() => directus_presetsWhereInput, { nullable: true })
  @Type(() => directus_presetsWhereInput)
  where?: directus_presetsWhereInput;

  @Field(() => [directus_presetsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<directus_presetsOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => directus_presetsWhereUniqueInput, { nullable: true })
  cursor?: directus_presetsWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
