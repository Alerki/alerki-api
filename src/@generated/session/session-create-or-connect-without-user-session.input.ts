import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { Type } from 'class-transformer';
import { SessionCreateWithoutUser_SessionInput } from './session-create-without-user-session.input';

@InputType()
export class SessionCreateOrConnectWithoutUser_SessionInput {
  @Field(() => SessionWhereUniqueInput, { nullable: false })
  @Type(() => SessionWhereUniqueInput)
  where!: Prisma.AtLeast<SessionWhereUniqueInput, 'id'>;

  @Field(() => SessionCreateWithoutUser_SessionInput, { nullable: false })
  @Type(() => SessionCreateWithoutUser_SessionInput)
  create!: SessionCreateWithoutUser_SessionInput;
}
