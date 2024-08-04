import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_SessionCreateWithoutSessionInput } from './user-session-create-without-session.input';
import { Type } from 'class-transformer';
import { User_SessionCreateOrConnectWithoutSessionInput } from './user-session-create-or-connect-without-session.input';
import { User_SessionUpsertWithWhereUniqueWithoutSessionInput } from './user-session-upsert-with-where-unique-without-session.input';
import { User_SessionCreateManySessionInputEnvelope } from './user-session-create-many-session-input-envelope.input';
import { Prisma } from '@prisma/client';
import { User_SessionWhereUniqueInput } from './user-session-where-unique.input';
import { User_SessionUpdateWithWhereUniqueWithoutSessionInput } from './user-session-update-with-where-unique-without-session.input';
import { User_SessionUpdateManyWithWhereWithoutSessionInput } from './user-session-update-many-with-where-without-session.input';
import { User_SessionScalarWhereInput } from './user-session-scalar-where.input';

@InputType()
export class User_SessionUpdateManyWithoutSessionNestedInput {
  @Field(() => [User_SessionCreateWithoutSessionInput], { nullable: true })
  @Type(() => User_SessionCreateWithoutSessionInput)
  create?: Array<User_SessionCreateWithoutSessionInput>;

  @Field(() => [User_SessionCreateOrConnectWithoutSessionInput], {
    nullable: true,
  })
  @Type(() => User_SessionCreateOrConnectWithoutSessionInput)
  connectOrCreate?: Array<User_SessionCreateOrConnectWithoutSessionInput>;

  @Field(() => [User_SessionUpsertWithWhereUniqueWithoutSessionInput], {
    nullable: true,
  })
  @Type(() => User_SessionUpsertWithWhereUniqueWithoutSessionInput)
  upsert?: Array<User_SessionUpsertWithWhereUniqueWithoutSessionInput>;

  @Field(() => User_SessionCreateManySessionInputEnvelope, { nullable: true })
  @Type(() => User_SessionCreateManySessionInputEnvelope)
  createMany?: User_SessionCreateManySessionInputEnvelope;

  @Field(() => [User_SessionWhereUniqueInput], { nullable: true })
  @Type(() => User_SessionWhereUniqueInput)
  set?: Array<Prisma.AtLeast<User_SessionWhereUniqueInput, 'id'>>;

  @Field(() => [User_SessionWhereUniqueInput], { nullable: true })
  @Type(() => User_SessionWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<User_SessionWhereUniqueInput, 'id'>>;

  @Field(() => [User_SessionWhereUniqueInput], { nullable: true })
  @Type(() => User_SessionWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<User_SessionWhereUniqueInput, 'id'>>;

  @Field(() => [User_SessionWhereUniqueInput], { nullable: true })
  @Type(() => User_SessionWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<User_SessionWhereUniqueInput, 'id'>>;

  @Field(() => [User_SessionUpdateWithWhereUniqueWithoutSessionInput], {
    nullable: true,
  })
  @Type(() => User_SessionUpdateWithWhereUniqueWithoutSessionInput)
  update?: Array<User_SessionUpdateWithWhereUniqueWithoutSessionInput>;

  @Field(() => [User_SessionUpdateManyWithWhereWithoutSessionInput], {
    nullable: true,
  })
  @Type(() => User_SessionUpdateManyWithWhereWithoutSessionInput)
  updateMany?: Array<User_SessionUpdateManyWithWhereWithoutSessionInput>;

  @Field(() => [User_SessionScalarWhereInput], { nullable: true })
  @Type(() => User_SessionScalarWhereInput)
  deleteMany?: Array<User_SessionScalarWhereInput>;
}
