import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPictureWhereInput } from './user-picture-where.input';
import { Type } from 'class-transformer';
import { UserPictureOrderByWithRelationAndSearchRelevanceInput } from './user-picture-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { UserPictureWhereUniqueInput } from './user-picture-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserPictureCountAggregateInput } from './user-picture-count-aggregate.input';
import { UserPictureMinAggregateInput } from './user-picture-min-aggregate.input';
import { UserPictureMaxAggregateInput } from './user-picture-max-aggregate.input';

@ArgsType()
export class UserPictureAggregateArgs {
  @Field(() => UserPictureWhereInput, { nullable: true })
  @Type(() => UserPictureWhereInput)
  where?: UserPictureWhereInput;

  @Field(() => [UserPictureOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<UserPictureOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => UserPictureWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserPictureWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => UserPictureCountAggregateInput, { nullable: true })
  _count?: UserPictureCountAggregateInput;

  @Field(() => UserPictureMinAggregateInput, { nullable: true })
  _min?: UserPictureMinAggregateInput;

  @Field(() => UserPictureMaxAggregateInput, { nullable: true })
  _max?: UserPictureMaxAggregateInput;
}
