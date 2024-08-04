import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPictureWhereInput } from './user-picture-where.input';
import { Type } from 'class-transformer';
import { UserPictureOrderByWithRelationAndSearchRelevanceInput } from './user-picture-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { UserPictureWhereUniqueInput } from './user-picture-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserPictureScalarFieldEnum } from './user-picture-scalar-field.enum';

@ArgsType()
export class FindFirstUserPictureArgs {
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

  @Field(() => [UserPictureScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserPictureScalarFieldEnum>;
}
