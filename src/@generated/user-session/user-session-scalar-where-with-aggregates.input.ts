import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';

@InputType()
export class User_SessionScalarWhereWithAggregatesInput {
  @Field(() => [User_SessionScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<User_SessionScalarWhereWithAggregatesInput>;

  @Field(() => [User_SessionScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<User_SessionScalarWhereWithAggregatesInput>;

  @Field(() => [User_SessionScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<User_SessionScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  User_id?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  Session_id?: UuidWithAggregatesFilter;
}
