import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Session } from '../session/session.model';
import { User } from '../user/user.model';

@ObjectType()
export class User_Session {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  User_id!: string;

  @Field(() => String, { nullable: false })
  Session_id!: string;

  @Field(() => Session, { nullable: false })
  Session?: Session;

  @Field(() => User, { nullable: false })
  User?: User;
}
