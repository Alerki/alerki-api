import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRolesWhereInput } from './user-roles-where.input';
import { Type } from 'class-transformer';
import { UserRolesOrderByWithRelationAndSearchRelevanceInput } from './user-roles-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { UserRolesWhereUniqueInput } from './user-roles-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserRolesCountAggregateInput } from './user-roles-count-aggregate.input';
import { UserRolesMinAggregateInput } from './user-roles-min-aggregate.input';
import { UserRolesMaxAggregateInput } from './user-roles-max-aggregate.input';

@ArgsType()
export class UserRolesAggregateArgs {
  @Field(() => UserRolesWhereInput, { nullable: true })
  @Type(() => UserRolesWhereInput)
  where?: UserRolesWhereInput;

  @Field(() => [UserRolesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<UserRolesOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => UserRolesWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserRolesWhereUniqueInput, 'id' | 'name'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => UserRolesCountAggregateInput, { nullable: true })
  _count?: UserRolesCountAggregateInput;

  @Field(() => UserRolesMinAggregateInput, { nullable: true })
  _min?: UserRolesMinAggregateInput;

  @Field(() => UserRolesMaxAggregateInput, { nullable: true })
  _max?: UserRolesMaxAggregateInput;
}
