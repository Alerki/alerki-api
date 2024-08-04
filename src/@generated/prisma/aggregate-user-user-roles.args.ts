import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_UserRolesWhereInput } from '../user-user-roles/user-user-roles-where.input';
import { Type } from 'class-transformer';
import { User_UserRolesOrderByWithRelationAndSearchRelevanceInput } from '../user-user-roles/user-user-roles-order-by-with-relation-and-search-relevance.input';
import { User_UserRolesWhereUniqueInput } from '../user-user-roles/user-user-roles-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateUserUserRolesArgs {
  @Field(() => User_UserRolesWhereInput, { nullable: true })
  @Type(() => User_UserRolesWhereInput)
  where?: User_UserRolesWhereInput;

  @Field(() => [User_UserRolesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<User_UserRolesOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => User_UserRolesWhereUniqueInput, { nullable: true })
  cursor?: User_UserRolesWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
