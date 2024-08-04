import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_collectionsCreateWithoutDirectus_collectionsInput } from './directus-collections-create-without-directus-collections.input';
import { Type } from 'class-transformer';
import { directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput } from './directus-collections-create-or-connect-without-directus-collections.input';
import { directus_collectionsUpsertWithWhereUniqueWithoutDirectus_collectionsInput } from './directus-collections-upsert-with-where-unique-without-directus-collections.input';
import { directus_collectionsCreateManyDirectus_collectionsInputEnvelope } from './directus-collections-create-many-directus-collections-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_collectionsWhereUniqueInput } from './directus-collections-where-unique.input';
import { directus_collectionsUpdateWithWhereUniqueWithoutDirectus_collectionsInput } from './directus-collections-update-with-where-unique-without-directus-collections.input';
import { directus_collectionsUpdateManyWithWhereWithoutDirectus_collectionsInput } from './directus-collections-update-many-with-where-without-directus-collections.input';
import { directus_collectionsScalarWhereInput } from './directus-collections-scalar-where.input';

@InputType()
export class directus_collectionsUncheckedUpdateManyWithoutDirectus_collectionsNestedInput {
  @Field(() => [directus_collectionsCreateWithoutDirectus_collectionsInput], {
    nullable: true,
  })
  @Type(() => directus_collectionsCreateWithoutDirectus_collectionsInput)
  create?: Array<directus_collectionsCreateWithoutDirectus_collectionsInput>;

  @Field(
    () => [directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput],
    { nullable: true },
  )
  @Type(
    () => directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput,
  )
  connectOrCreate?: Array<directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput>;

  @Field(
    () => [
      directus_collectionsUpsertWithWhereUniqueWithoutDirectus_collectionsInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      directus_collectionsUpsertWithWhereUniqueWithoutDirectus_collectionsInput,
  )
  upsert?: Array<directus_collectionsUpsertWithWhereUniqueWithoutDirectus_collectionsInput>;

  @Field(
    () => directus_collectionsCreateManyDirectus_collectionsInputEnvelope,
    { nullable: true },
  )
  @Type(() => directus_collectionsCreateManyDirectus_collectionsInputEnvelope)
  createMany?: directus_collectionsCreateManyDirectus_collectionsInputEnvelope;

  @Field(() => [directus_collectionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_collectionsWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<directus_collectionsWhereUniqueInput, 'collection'>
  >;

  @Field(() => [directus_collectionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_collectionsWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<directus_collectionsWhereUniqueInput, 'collection'>
  >;

  @Field(() => [directus_collectionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_collectionsWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<directus_collectionsWhereUniqueInput, 'collection'>
  >;

  @Field(() => [directus_collectionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_collectionsWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<directus_collectionsWhereUniqueInput, 'collection'>
  >;

  @Field(
    () => [
      directus_collectionsUpdateWithWhereUniqueWithoutDirectus_collectionsInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      directus_collectionsUpdateWithWhereUniqueWithoutDirectus_collectionsInput,
  )
  update?: Array<directus_collectionsUpdateWithWhereUniqueWithoutDirectus_collectionsInput>;

  @Field(
    () => [
      directus_collectionsUpdateManyWithWhereWithoutDirectus_collectionsInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      directus_collectionsUpdateManyWithWhereWithoutDirectus_collectionsInput,
  )
  updateMany?: Array<directus_collectionsUpdateManyWithWhereWithoutDirectus_collectionsInput>;

  @Field(() => [directus_collectionsScalarWhereInput], { nullable: true })
  @Type(() => directus_collectionsScalarWhereInput)
  deleteMany?: Array<directus_collectionsScalarWhereInput>;
}
