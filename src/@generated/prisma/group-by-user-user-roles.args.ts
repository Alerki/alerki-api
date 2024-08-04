import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_UserRolesWhereInput } from '../user-user-roles/user-user-roles-where.input';
import { Type } from 'class-transformer';
import { User_UserRolesOrderByWithAggregationInput } from '../user-user-roles/user-user-roles-order-by-with-aggregation.input';
import { User_UserRolesScalarFieldEnum } from '../user-user-roles/user-user-roles-scalar-field.enum';
import { User_UserRolesScalarWhereWithAggregatesInput } from '../user-user-roles/user-user-roles-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByUserUserRolesArgs {
  @Field(() => User_UserRolesWhereInput, { nullable: true })
  @Type(() => User_UserRolesWhereInput)
  where?: User_UserRolesWhereInput;

  @Field(() => [User_UserRolesOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<User_UserRolesOrderByWithAggregationInput>;

  @Field(() => [User_UserRolesScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof User_UserRolesScalarFieldEnum>;

  @Field(() => User_UserRolesScalarWhereWithAggregatesInput, { nullable: true })
  having?: User_UserRolesScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
