import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionCreateWithoutUser_SessionInput } from './session-create-without-user-session.input';
import { Type } from 'class-transformer';
import { SessionCreateOrConnectWithoutUser_SessionInput } from './session-create-or-connect-without-user-session.input';
import { SessionUpsertWithoutUser_SessionInput } from './session-upsert-without-user-session.input';
import { Prisma } from '@prisma/client';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { SessionUpdateWithoutUser_SessionInput } from './session-update-without-user-session.input';

@InputType()
export class SessionUpdateOneRequiredWithoutUser_SessionNestedInput {
  @Field(() => SessionCreateWithoutUser_SessionInput, { nullable: true })
  @Type(() => SessionCreateWithoutUser_SessionInput)
  create?: SessionCreateWithoutUser_SessionInput;

  @Field(() => SessionCreateOrConnectWithoutUser_SessionInput, {
    nullable: true,
  })
  @Type(() => SessionCreateOrConnectWithoutUser_SessionInput)
  connectOrCreate?: SessionCreateOrConnectWithoutUser_SessionInput;

  @Field(() => SessionUpsertWithoutUser_SessionInput, { nullable: true })
  @Type(() => SessionUpsertWithoutUser_SessionInput)
  upsert?: SessionUpsertWithoutUser_SessionInput;

  @Field(() => SessionWhereUniqueInput, { nullable: true })
  @Type(() => SessionWhereUniqueInput)
  connect?: Prisma.AtLeast<SessionWhereUniqueInput, 'id'>;

  @Field(() => SessionUpdateWithoutUser_SessionInput, { nullable: true })
  @Type(() => SessionUpdateWithoutUser_SessionInput)
  update?: SessionUpdateWithoutUser_SessionInput;
}
