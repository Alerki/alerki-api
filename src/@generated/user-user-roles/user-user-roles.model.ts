import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { UserRoles } from '../user-roles/user-roles.model';

@ObjectType()
export class User_UserRoles {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  User_id!: string;

  @Field(() => String, { nullable: false })
  UserRoles_id!: string;

  @Field(() => User, { nullable: false })
  User?: User;

  @Field(() => UserRoles, { nullable: false })
  UserRoles?: UserRoles;
}
