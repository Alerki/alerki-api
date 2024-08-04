import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sharesCreateWithoutDirectus_rolesInput } from './directus-shares-create-without-directus-roles.input';
import { Type } from 'class-transformer';
import { directus_sharesCreateOrConnectWithoutDirectus_rolesInput } from './directus-shares-create-or-connect-without-directus-roles.input';
import { directus_sharesUpsertWithWhereUniqueWithoutDirectus_rolesInput } from './directus-shares-upsert-with-where-unique-without-directus-roles.input';
import { directus_sharesCreateManyDirectus_rolesInputEnvelope } from './directus-shares-create-many-directus-roles-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_sharesWhereUniqueInput } from './directus-shares-where-unique.input';
import { directus_sharesUpdateWithWhereUniqueWithoutDirectus_rolesInput } from './directus-shares-update-with-where-unique-without-directus-roles.input';
import { directus_sharesUpdateManyWithWhereWithoutDirectus_rolesInput } from './directus-shares-update-many-with-where-without-directus-roles.input';
import { directus_sharesScalarWhereInput } from './directus-shares-scalar-where.input';

@InputType()
export class directus_sharesUncheckedUpdateManyWithoutDirectus_rolesNestedInput {
  @Field(() => [directus_sharesCreateWithoutDirectus_rolesInput], {
    nullable: true,
  })
  @Type(() => directus_sharesCreateWithoutDirectus_rolesInput)
  create?: Array<directus_sharesCreateWithoutDirectus_rolesInput>;

  @Field(() => [directus_sharesCreateOrConnectWithoutDirectus_rolesInput], {
    nullable: true,
  })
  @Type(() => directus_sharesCreateOrConnectWithoutDirectus_rolesInput)
  connectOrCreate?: Array<directus_sharesCreateOrConnectWithoutDirectus_rolesInput>;

  @Field(
    () => [directus_sharesUpsertWithWhereUniqueWithoutDirectus_rolesInput],
    { nullable: true },
  )
  @Type(() => directus_sharesUpsertWithWhereUniqueWithoutDirectus_rolesInput)
  upsert?: Array<directus_sharesUpsertWithWhereUniqueWithoutDirectus_rolesInput>;

  @Field(() => directus_sharesCreateManyDirectus_rolesInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_sharesCreateManyDirectus_rolesInputEnvelope)
  createMany?: directus_sharesCreateManyDirectus_rolesInputEnvelope;

  @Field(() => [directus_sharesWhereUniqueInput], { nullable: true })
  @Type(() => directus_sharesWhereUniqueInput)
  set?: Array<Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>>;

  @Field(() => [directus_sharesWhereUniqueInput], { nullable: true })
  @Type(() => directus_sharesWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>>;

  @Field(() => [directus_sharesWhereUniqueInput], { nullable: true })
  @Type(() => directus_sharesWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>>;

  @Field(() => [directus_sharesWhereUniqueInput], { nullable: true })
  @Type(() => directus_sharesWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>>;

  @Field(
    () => [directus_sharesUpdateWithWhereUniqueWithoutDirectus_rolesInput],
    { nullable: true },
  )
  @Type(() => directus_sharesUpdateWithWhereUniqueWithoutDirectus_rolesInput)
  update?: Array<directus_sharesUpdateWithWhereUniqueWithoutDirectus_rolesInput>;

  @Field(() => [directus_sharesUpdateManyWithWhereWithoutDirectus_rolesInput], {
    nullable: true,
  })
  @Type(() => directus_sharesUpdateManyWithWhereWithoutDirectus_rolesInput)
  updateMany?: Array<directus_sharesUpdateManyWithWhereWithoutDirectus_rolesInput>;

  @Field(() => [directus_sharesScalarWhereInput], { nullable: true })
  @Type(() => directus_sharesScalarWhereInput)
  deleteMany?: Array<directus_sharesScalarWhereInput>;
}
