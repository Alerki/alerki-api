import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_SessionCreateManyUserInput } from './user-session-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class User_SessionCreateManyUserInputEnvelope {
  @Field(() => [User_SessionCreateManyUserInput], { nullable: false })
  @Type(() => User_SessionCreateManyUserInput)
  data!: Array<User_SessionCreateManyUserInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
