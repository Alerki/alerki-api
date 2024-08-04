import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';

@InputType()
export class User_UserRolesScalarWhereWithAggregatesInput {
  @Field(() => [User_UserRolesScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<User_UserRolesScalarWhereWithAggregatesInput>;

  @Field(() => [User_UserRolesScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<User_UserRolesScalarWhereWithAggregatesInput>;

  @Field(() => [User_UserRolesScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<User_UserRolesScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  User_id?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  UserRoles_id?: UuidWithAggregatesFilter;
}
