import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User_UserRoles } from '../user-user-roles/user-user-roles.model';
import { UserRolesCount } from './user-roles-count.output';

@ObjectType()
export class UserRoles {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: true })
  date_created!: Date | null;

  @Field(() => Date, { nullable: true })
  date_updated!: Date | null;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => [User_UserRoles], { nullable: true })
  User_UserRoles?: Array<User_UserRoles>;

  @Field(() => UserRolesCount, { nullable: false })
  _count?: UserRolesCount;
}
