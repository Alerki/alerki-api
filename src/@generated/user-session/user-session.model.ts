import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Session } from '../session/session.model';
import { User } from '../user/user.model';

@ObjectType()
export class User_Session {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    User_id!: string | null;

    @Field(() => String, {nullable:true})
    Session_id!: string | null;

    @Field(() => Session, {nullable:true})
    Session?: Session | null;

    @Field(() => User, {nullable:true})
    User?: User | null;
}
