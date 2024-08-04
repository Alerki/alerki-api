import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { User_SessionWhereUniqueInput } from './user-session-where-unique.input';
import { Type } from 'class-transformer';
import { User_SessionUpdateWithoutSessionInput } from './user-session-update-without-session.input';
import { User_SessionCreateWithoutSessionInput } from './user-session-create-without-session.input';

@InputType()
export class User_SessionUpsertWithWhereUniqueWithoutSessionInput {
  @Field(() => User_SessionWhereUniqueInput, { nullable: false })
  @Type(() => User_SessionWhereUniqueInput)
  where!: Prisma.AtLeast<User_SessionWhereUniqueInput, 'id'>;

  @Field(() => User_SessionUpdateWithoutSessionInput, { nullable: false })
  @Type(() => User_SessionUpdateWithoutSessionInput)
  update!: User_SessionUpdateWithoutSessionInput;

  @Field(() => User_SessionCreateWithoutSessionInput, { nullable: false })
  @Type(() => User_SessionCreateWithoutSessionInput)
  create!: User_SessionCreateWithoutSessionInput;
}
