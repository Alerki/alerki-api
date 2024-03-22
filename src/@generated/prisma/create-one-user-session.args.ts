import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_SessionCreateInput } from '../user-session/user-session-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserSessionArgs {

    @Field(() => User_SessionCreateInput, {nullable:false})
    @Type(() => User_SessionCreateInput)
    data!: User_SessionCreateInput;
}
