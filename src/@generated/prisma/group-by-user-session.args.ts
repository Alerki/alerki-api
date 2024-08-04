import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_SessionWhereInput } from '../user-session/user-session-where.input';
import { Type } from 'class-transformer';
import { User_SessionOrderByWithAggregationInput } from '../user-session/user-session-order-by-with-aggregation.input';
import { User_SessionScalarFieldEnum } from '../user-session/user-session-scalar-field.enum';
import { User_SessionScalarWhereWithAggregatesInput } from '../user-session/user-session-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByUserSessionArgs {
  @Field(() => User_SessionWhereInput, { nullable: true })
  @Type(() => User_SessionWhereInput)
  where?: User_SessionWhereInput;

  @Field(() => [User_SessionOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<User_SessionOrderByWithAggregationInput>;

  @Field(() => [User_SessionScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof User_SessionScalarFieldEnum>;

  @Field(() => User_SessionScalarWhereWithAggregatesInput, { nullable: true })
  having?: User_SessionScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
