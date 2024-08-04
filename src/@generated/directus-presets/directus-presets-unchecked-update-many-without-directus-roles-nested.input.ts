import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_presetsCreateWithoutDirectus_rolesInput } from './directus-presets-create-without-directus-roles.input';
import { Type } from 'class-transformer';
import { directus_presetsCreateOrConnectWithoutDirectus_rolesInput } from './directus-presets-create-or-connect-without-directus-roles.input';
import { directus_presetsUpsertWithWhereUniqueWithoutDirectus_rolesInput } from './directus-presets-upsert-with-where-unique-without-directus-roles.input';
import { directus_presetsCreateManyDirectus_rolesInputEnvelope } from './directus-presets-create-many-directus-roles-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_presetsWhereUniqueInput } from './directus-presets-where-unique.input';
import { directus_presetsUpdateWithWhereUniqueWithoutDirectus_rolesInput } from './directus-presets-update-with-where-unique-without-directus-roles.input';
import { directus_presetsUpdateManyWithWhereWithoutDirectus_rolesInput } from './directus-presets-update-many-with-where-without-directus-roles.input';
import { directus_presetsScalarWhereInput } from './directus-presets-scalar-where.input';

@InputType()
export class directus_presetsUncheckedUpdateManyWithoutDirectus_rolesNestedInput {
  @Field(() => [directus_presetsCreateWithoutDirectus_rolesInput], {
    nullable: true,
  })
  @Type(() => directus_presetsCreateWithoutDirectus_rolesInput)
  create?: Array<directus_presetsCreateWithoutDirectus_rolesInput>;

  @Field(() => [directus_presetsCreateOrConnectWithoutDirectus_rolesInput], {
    nullable: true,
  })
  @Type(() => directus_presetsCreateOrConnectWithoutDirectus_rolesInput)
  connectOrCreate?: Array<directus_presetsCreateOrConnectWithoutDirectus_rolesInput>;

  @Field(
    () => [directus_presetsUpsertWithWhereUniqueWithoutDirectus_rolesInput],
    { nullable: true },
  )
  @Type(() => directus_presetsUpsertWithWhereUniqueWithoutDirectus_rolesInput)
  upsert?: Array<directus_presetsUpsertWithWhereUniqueWithoutDirectus_rolesInput>;

  @Field(() => directus_presetsCreateManyDirectus_rolesInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_presetsCreateManyDirectus_rolesInputEnvelope)
  createMany?: directus_presetsCreateManyDirectus_rolesInputEnvelope;

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
    () => [directus_presetsUpdateWithWhereUniqueWithoutDirectus_rolesInput],
    { nullable: true },
  )
  @Type(() => directus_presetsUpdateWithWhereUniqueWithoutDirectus_rolesInput)
  update?: Array<directus_presetsUpdateWithWhereUniqueWithoutDirectus_rolesInput>;

  @Field(
    () => [directus_presetsUpdateManyWithWhereWithoutDirectus_rolesInput],
    { nullable: true },
  )
  @Type(() => directus_presetsUpdateManyWithWhereWithoutDirectus_rolesInput)
  updateMany?: Array<directus_presetsUpdateManyWithWhereWithoutDirectus_rolesInput>;

  @Field(() => [directus_presetsScalarWhereInput], { nullable: true })
  @Type(() => directus_presetsScalarWhereInput)
  deleteMany?: Array<directus_presetsScalarWhereInput>;
}
