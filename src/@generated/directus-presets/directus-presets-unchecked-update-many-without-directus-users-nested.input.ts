import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_presetsCreateWithoutDirectus_usersInput } from './directus-presets-create-without-directus-users.input';
import { Type } from 'class-transformer';
import { directus_presetsCreateOrConnectWithoutDirectus_usersInput } from './directus-presets-create-or-connect-without-directus-users.input';
import { directus_presetsUpsertWithWhereUniqueWithoutDirectus_usersInput } from './directus-presets-upsert-with-where-unique-without-directus-users.input';
import { directus_presetsCreateManyDirectus_usersInputEnvelope } from './directus-presets-create-many-directus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_presetsWhereUniqueInput } from './directus-presets-where-unique.input';
import { directus_presetsUpdateWithWhereUniqueWithoutDirectus_usersInput } from './directus-presets-update-with-where-unique-without-directus-users.input';
import { directus_presetsUpdateManyWithWhereWithoutDirectus_usersInput } from './directus-presets-update-many-with-where-without-directus-users.input';
import { directus_presetsScalarWhereInput } from './directus-presets-scalar-where.input';

@InputType()
export class directus_presetsUncheckedUpdateManyWithoutDirectus_usersNestedInput {
  @Field(() => [directus_presetsCreateWithoutDirectus_usersInput], {
    nullable: true,
  })
  @Type(() => directus_presetsCreateWithoutDirectus_usersInput)
  create?: Array<directus_presetsCreateWithoutDirectus_usersInput>;

  @Field(() => [directus_presetsCreateOrConnectWithoutDirectus_usersInput], {
    nullable: true,
  })
  @Type(() => directus_presetsCreateOrConnectWithoutDirectus_usersInput)
  connectOrCreate?: Array<directus_presetsCreateOrConnectWithoutDirectus_usersInput>;

  @Field(
    () => [directus_presetsUpsertWithWhereUniqueWithoutDirectus_usersInput],
    { nullable: true },
  )
  @Type(() => directus_presetsUpsertWithWhereUniqueWithoutDirectus_usersInput)
  upsert?: Array<directus_presetsUpsertWithWhereUniqueWithoutDirectus_usersInput>;

  @Field(() => directus_presetsCreateManyDirectus_usersInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_presetsCreateManyDirectus_usersInputEnvelope)
  createMany?: directus_presetsCreateManyDirectus_usersInputEnvelope;

  @Field(() => [directus_presetsWhereUniqueInput], { nullable: true })
  @Type(() => directus_presetsWhereUniqueInput)
  set?: Array<Prisma.AtLeast<directus_presetsWhereUniqueInput, 'id'>>;

  @Field(() => [directus_presetsWhereUniqueInput], { nullable: true })
  @Type(() => directus_presetsWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<directus_presetsWhereUniqueInput, 'id'>>;

  @Field(() => [directus_presetsWhereUniqueInput], { nullable: true })
  @Type(() => directus_presetsWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<directus_presetsWhereUniqueInput, 'id'>>;

  @Field(() => [directus_presetsWhereUniqueInput], { nullable: true })
  @Type(() => directus_presetsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_presetsWhereUniqueInput, 'id'>>;

  @Field(
    () => [directus_presetsUpdateWithWhereUniqueWithoutDirectus_usersInput],
    { nullable: true },
  )
  @Type(() => directus_presetsUpdateWithWhereUniqueWithoutDirectus_usersInput)
  update?: Array<directus_presetsUpdateWithWhereUniqueWithoutDirectus_usersInput>;

  @Field(
    () => [directus_presetsUpdateManyWithWhereWithoutDirectus_usersInput],
    { nullable: true },
  )
  @Type(() => directus_presetsUpdateManyWithWhereWithoutDirectus_usersInput)
  updateMany?: Array<directus_presetsUpdateManyWithWhereWithoutDirectus_usersInput>;

  @Field(() => [directus_presetsScalarWhereInput], { nullable: true })
  @Type(() => directus_presetsScalarWhereInput)
  deleteMany?: Array<directus_presetsScalarWhereInput>;
}
