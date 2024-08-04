import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_SessionCreateWithoutUserInput } from './user-session-create-without-user.input';
import { Type } from 'class-transformer';
import { User_SessionCreateOrConnectWithoutUserInput } from './user-session-create-or-connect-without-user.input';
import { User_SessionCreateManyUserInputEnvelope } from './user-session-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { User_SessionWhereUniqueInput } from './user-session-where-unique.input';

@InputType()
export class User_SessionUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [User_SessionCreateWithoutUserInput], { nullable: true })
  @Type(() => User_SessionCreateWithoutUserInput)
  create?: Array<User_SessionCreateWithoutUserInput>;

  @Field(() => [User_SessionCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => User_SessionCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<User_SessionCreateOrConnectWithoutUserInput>;

  @Field(() => User_SessionCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => User_SessionCreateManyUserInputEnvelope)
  createMany?: User_SessionCreateManyUserInputEnvelope;

  @Field(() => [User_SessionWhereUniqueInput], { nullable: true })
  @Type(() => User_SessionWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<User_SessionWhereUniqueInput, 'id'>>;
}
