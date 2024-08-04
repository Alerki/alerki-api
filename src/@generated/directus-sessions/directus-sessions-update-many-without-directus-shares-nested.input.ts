import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sessionsCreateWithoutDirectus_sharesInput } from './directus-sessions-create-without-directus-shares.input';
import { Type } from 'class-transformer';
import { directus_sessionsCreateOrConnectWithoutDirectus_sharesInput } from './directus-sessions-create-or-connect-without-directus-shares.input';
import { directus_sessionsUpsertWithWhereUniqueWithoutDirectus_sharesInput } from './directus-sessions-upsert-with-where-unique-without-directus-shares.input';
import { directus_sessionsCreateManyDirectus_sharesInputEnvelope } from './directus-sessions-create-many-directus-shares-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_sessionsWhereUniqueInput } from './directus-sessions-where-unique.input';
import { directus_sessionsUpdateWithWhereUniqueWithoutDirectus_sharesInput } from './directus-sessions-update-with-where-unique-without-directus-shares.input';
import { directus_sessionsUpdateManyWithWhereWithoutDirectus_sharesInput } from './directus-sessions-update-many-with-where-without-directus-shares.input';
import { directus_sessionsScalarWhereInput } from './directus-sessions-scalar-where.input';

@InputType()
export class directus_sessionsUpdateManyWithoutDirectus_sharesNestedInput {
  @Field(() => [directus_sessionsCreateWithoutDirectus_sharesInput], {
    nullable: true,
  })
  @Type(() => directus_sessionsCreateWithoutDirectus_sharesInput)
  create?: Array<directus_sessionsCreateWithoutDirectus_sharesInput>;

  @Field(() => [directus_sessionsCreateOrConnectWithoutDirectus_sharesInput], {
    nullable: true,
  })
  @Type(() => directus_sessionsCreateOrConnectWithoutDirectus_sharesInput)
  connectOrCreate?: Array<directus_sessionsCreateOrConnectWithoutDirectus_sharesInput>;

  @Field(
    () => [directus_sessionsUpsertWithWhereUniqueWithoutDirectus_sharesInput],
    { nullable: true },
  )
  @Type(() => directus_sessionsUpsertWithWhereUniqueWithoutDirectus_sharesInput)
  upsert?: Array<directus_sessionsUpsertWithWhereUniqueWithoutDirectus_sharesInput>;

  @Field(() => directus_sessionsCreateManyDirectus_sharesInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_sessionsCreateManyDirectus_sharesInputEnvelope)
  createMany?: directus_sessionsCreateManyDirectus_sharesInputEnvelope;

  @Field(() => [directus_sessionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_sessionsWhereUniqueInput)
  set?: Array<Prisma.AtLeast<directus_sessionsWhereUniqueInput, 'token'>>;

  @Field(() => [directus_sessionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_sessionsWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<directus_sessionsWhereUniqueInput, 'token'>
  >;

  @Field(() => [directus_sessionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_sessionsWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<directus_sessionsWhereUniqueInput, 'token'>>;

  @Field(() => [directus_sessionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_sessionsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_sessionsWhereUniqueInput, 'token'>>;

  @Field(
    () => [directus_sessionsUpdateWithWhereUniqueWithoutDirectus_sharesInput],
    { nullable: true },
  )
  @Type(() => directus_sessionsUpdateWithWhereUniqueWithoutDirectus_sharesInput)
  update?: Array<directus_sessionsUpdateWithWhereUniqueWithoutDirectus_sharesInput>;

  @Field(
    () => [directus_sessionsUpdateManyWithWhereWithoutDirectus_sharesInput],
    { nullable: true },
  )
  @Type(() => directus_sessionsUpdateManyWithWhereWithoutDirectus_sharesInput)
  updateMany?: Array<directus_sessionsUpdateManyWithWhereWithoutDirectus_sharesInput>;

  @Field(() => [directus_sessionsScalarWhereInput], { nullable: true })
  @Type(() => directus_sessionsScalarWhereInput)
  deleteMany?: Array<directus_sessionsScalarWhereInput>;
}
