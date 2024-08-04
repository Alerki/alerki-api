import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { SessionRelationFilter } from '../session/session-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class User_SessionWhereInput {
  @Field(() => [User_SessionWhereInput], { nullable: true })
  AND?: Array<User_SessionWhereInput>;

  @Field(() => [User_SessionWhereInput], { nullable: true })
  OR?: Array<User_SessionWhereInput>;

  @Field(() => [User_SessionWhereInput], { nullable: true })
  NOT?: Array<User_SessionWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => UuidFilter, { nullable: true })
  User_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  Session_id?: UuidFilter;

  @Field(() => SessionRelationFilter, { nullable: true })
  Session?: SessionRelationFilter;

  @Field(() => UserRelationFilter, { nullable: true })
  User?: UserRelationFilter;
}
