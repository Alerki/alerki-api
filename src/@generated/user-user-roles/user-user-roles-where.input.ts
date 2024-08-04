import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { UserRolesRelationFilter } from '../user-roles/user-roles-relation-filter.input';

@InputType()
export class User_UserRolesWhereInput {
  @Field(() => [User_UserRolesWhereInput], { nullable: true })
  AND?: Array<User_UserRolesWhereInput>;

  @Field(() => [User_UserRolesWhereInput], { nullable: true })
  OR?: Array<User_UserRolesWhereInput>;

  @Field(() => [User_UserRolesWhereInput], { nullable: true })
  NOT?: Array<User_UserRolesWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => UuidFilter, { nullable: true })
  User_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  UserRoles_id?: UuidFilter;

  @Field(() => UserRelationFilter, { nullable: true })
  User?: UserRelationFilter;

  @Field(() => UserRolesRelationFilter, { nullable: true })
  UserRoles?: UserRolesRelationFilter;
}
