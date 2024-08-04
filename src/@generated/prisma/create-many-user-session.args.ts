import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_SessionCreateManyInput } from '../user-session/user-session-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserSessionArgs {
  @Field(() => [User_SessionCreateManyInput], { nullable: false })
  @Type(() => User_SessionCreateManyInput)
  data!: Array<User_SessionCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
