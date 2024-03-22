import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_SessionUpdateInput } from '../user-session/user-session-update.input';
import { Type } from 'class-transformer';
import { User_SessionWhereUniqueInput } from '../user-session/user-session-where-unique.input';

@ArgsType()
export class UpdateOneUserSessionArgs {

    @Field(() => User_SessionUpdateInput, {nullable:false})
    @Type(() => User_SessionUpdateInput)
    data!: User_SessionUpdateInput;

    @Field(() => User_SessionWhereUniqueInput, {nullable:false})
    @Type(() => User_SessionWhereUniqueInput)
    where!: User_SessionWhereUniqueInput;
}
