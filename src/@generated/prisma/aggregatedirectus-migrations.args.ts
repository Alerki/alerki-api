import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_migrationsWhereInput } from '../directus-migrations/directus-migrations-where.input';
import { Type } from 'class-transformer';
import { directus_migrationsOrderByWithRelationAndSearchRelevanceInput } from '../directus-migrations/directus-migrations-order-by-with-relation-and-search-relevance.input';
import { directus_migrationsWhereUniqueInput } from '../directus-migrations/directus-migrations-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatedirectusMigrationsArgs {
  @Field(() => directus_migrationsWhereInput, { nullable: true })
  @Type(() => directus_migrationsWhereInput)
  where?: directus_migrationsWhereInput;

  @Field(
    () => [directus_migrationsOrderByWithRelationAndSearchRelevanceInput],
    { nullable: true },
  )
  orderBy?: Array<directus_migrationsOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => directus_migrationsWhereUniqueInput, { nullable: true })
  cursor?: directus_migrationsWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
