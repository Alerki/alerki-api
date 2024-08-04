import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionUpdateWithoutUser_SessionInput } from './session-update-without-user-session.input';
import { Type } from 'class-transformer';
import { SessionCreateWithoutUser_SessionInput } from './session-create-without-user-session.input';

@InputType()
export class SessionUpsertWithoutUser_SessionInput {
  @Field(() => SessionUpdateWithoutUser_SessionInput, { nullable: false })
  @Type(() => SessionUpdateWithoutUser_SessionInput)
  update!: SessionUpdateWithoutUser_SessionInput;

  @Field(() => SessionCreateWithoutUser_SessionInput, { nullable: false })
  @Type(() => SessionCreateWithoutUser_SessionInput)
  create!: SessionCreateWithoutUser_SessionInput;
}
