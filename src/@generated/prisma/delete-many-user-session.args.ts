import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_SessionWhereInput } from '../user-session/user-session-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserSessionArgs {

    @Field(() => User_SessionWhereInput, {nullable:true})
    @Type(() => User_SessionWhereInput)
    where?: User_SessionWhereInput;
}
