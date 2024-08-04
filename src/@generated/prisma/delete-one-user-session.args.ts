import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_SessionWhereUniqueInput } from '../user-session/user-session-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneUserSessionArgs {
  @Field(() => User_SessionWhereUniqueInput, { nullable: false })
  @Type(() => User_SessionWhereUniqueInput)
  where!: User_SessionWhereUniqueInput;
}
