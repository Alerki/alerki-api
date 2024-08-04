import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_SessionWhereUniqueInput } from '../user-session/user-session-where-unique.input';
import { Type } from 'class-transformer';
import { User_SessionCreateInput } from '../user-session/user-session-create.input';
import { User_SessionUpdateInput } from '../user-session/user-session-update.input';

@ArgsType()
export class UpsertOneUserSessionArgs {
  @Field(() => User_SessionWhereUniqueInput, { nullable: false })
  @Type(() => User_SessionWhereUniqueInput)
  where!: User_SessionWhereUniqueInput;

  @Field(() => User_SessionCreateInput, { nullable: false })
  @Type(() => User_SessionCreateInput)
  create!: User_SessionCreateInput;

  @Field(() => User_SessionUpdateInput, { nullable: false })
  @Type(() => User_SessionUpdateInput)
  update!: User_SessionUpdateInput;
}
