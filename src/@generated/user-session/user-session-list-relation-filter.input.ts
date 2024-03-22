import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_SessionWhereInput } from './user-session-where.input';

@InputType()
export class User_SessionListRelationFilter {

    @Field(() => User_SessionWhereInput, {nullable:true})
    every?: User_SessionWhereInput;

    @Field(() => User_SessionWhereInput, {nullable:true})
    some?: User_SessionWhereInput;

    @Field(() => User_SessionWhereInput, {nullable:true})
    none?: User_SessionWhereInput;
}
