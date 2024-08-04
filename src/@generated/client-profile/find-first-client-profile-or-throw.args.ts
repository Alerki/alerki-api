import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientProfileWhereInput } from './client-profile-where.input';
import { Type } from 'class-transformer';
import { ClientProfileOrderByWithRelationAndSearchRelevanceInput } from './client-profile-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { ClientProfileWhereUniqueInput } from './client-profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClientProfileScalarFieldEnum } from './client-profile-scalar-field.enum';

@ArgsType()
export class FindFirstClientProfileOrThrowArgs {
  @Field(() => ClientProfileWhereInput, { nullable: true })
  @Type(() => ClientProfileWhereInput)
  where?: ClientProfileWhereInput;

  @Field(() => [ClientProfileOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<ClientProfileOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => ClientProfileWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ClientProfileWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ClientProfileScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ClientProfileScalarFieldEnum>;
}
