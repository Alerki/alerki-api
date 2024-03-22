import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_SessionUncheckedUpdateManyInput } from '../user-session/user-session-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { User_SessionWhereInput } from '../user-session/user-session-where.input';

@ArgsType()
export class UpdateManyUserSessionArgs {

    @Field(() => User_SessionUncheckedUpdateManyInput, {nullable:false})
    @Type(() => User_SessionUncheckedUpdateManyInput)
    data!: User_SessionUncheckedUpdateManyInput;

    @Field(() => User_SessionWhereInput, {nullable:true})
    @Type(() => User_SessionWhereInput)
    where?: User_SessionWhereInput;
}
