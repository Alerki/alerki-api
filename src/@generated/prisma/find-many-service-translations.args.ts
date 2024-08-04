import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Service_translationsWhereInput } from '../service-translations/service-translations-where.input';
import { Type } from 'class-transformer';
import { Service_translationsOrderByWithRelationAndSearchRelevanceInput } from '../service-translations/service-translations-order-by-with-relation-and-search-relevance.input';
import { Service_translationsWhereUniqueInput } from '../service-translations/service-translations-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Service_translationsScalarFieldEnum } from '../service-translations/service-translations-scalar-field.enum';

@ArgsType()
export class FindManyServiceTranslationsArgs {
  @Field(() => Service_translationsWhereInput, { nullable: true })
  @Type(() => Service_translationsWhereInput)
  where?: Service_translationsWhereInput;

  @Field(
    () => [Service_translationsOrderByWithRelationAndSearchRelevanceInput],
    { nullable: true },
  )
  orderBy?: Array<Service_translationsOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => Service_translationsWhereUniqueInput, { nullable: true })
  cursor?: Service_translationsWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [Service_translationsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof Service_translationsScalarFieldEnum>;
}
