import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ClientProfile } from '../client-profile/client-profile.model';
import { MasterProfile } from '../master-profile/master-profile.model';
import { UserPicture } from '../user-picture/user-picture.model';
import { User_Session } from '../user-session/user-session.model';
import { User_UserRoles } from '../user-user-roles/user-user-roles.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: true })
  date_created!: Date | null;

  @Field(() => Date, { nullable: true })
  date_updated!: Date | null;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: true })
  phoneNumber!: string | null;

  @Field(() => String, { nullable: false })
  username!: string;

  @Field(() => String, { nullable: true })
  firstName!: string | null;

  @Field(() => String, { nullable: true })
  lastName!: string | null;

  @Field(() => Date, { nullable: true })
  birthDate!: Date | null;

  @Field(() => String, { nullable: true })
  picture!: string | null;

  @Field(() => String, { nullable: true })
  masterProfile!: string | null;

  @Field(() => String, { nullable: false })
  clientProfile!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => ClientProfile, { nullable: false })
  ClientProfile?: ClientProfile;

  @Field(() => MasterProfile, { nullable: true })
  MasterProfile?: MasterProfile | null;

  @Field(() => UserPicture, { nullable: true })
  UserPicture?: UserPicture | null;

  @Field(() => [User_Session], { nullable: true })
  User_Session?: Array<User_Session>;

  @Field(() => [User_UserRoles], { nullable: true })
  User_UserRoles?: Array<User_UserRoles>;

  @Field(() => UserCount, { nullable: false })
  _count?: UserCount;
}
