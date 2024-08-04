import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceWhereInput } from './service-where.input';
import { Type } from 'class-transformer';
import { ServiceOrderByWithRelationAndSearchRelevanceInput } from './service-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ServiceScalarFieldEnum } from './service-scalar-field.enum';

@ArgsType()
export class FindManyServiceArgs {
  @Field(() => ServiceWhereInput, { nullable: true })
  @Type(() => ServiceWhereInput)
  where?: ServiceWhereInput;

  @Field(() => [ServiceOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<ServiceOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => ServiceWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ServiceWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ServiceScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ServiceScalarFieldEnum>;
}
