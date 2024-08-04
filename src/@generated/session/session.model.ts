import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User_Session } from '../user-session/user-session.model';
import { SessionCount } from './session-count.output';

@ObjectType()
export class Session {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: true })
  date_created!: Date | null;

  @Field(() => Date, { nullable: true })
  date_updated!: Date | null;

  @Field(() => String, { nullable: false, defaultValue: 'undefined' })
  deviceName!: string;

  @Field(() => String, { nullable: false })
  refreshToken!: string;

  @Field(() => [User_Session], { nullable: true })
  User_Session?: Array<User_Session>;

  @Field(() => SessionCount, { nullable: false })
  _count?: SessionCount;
}
