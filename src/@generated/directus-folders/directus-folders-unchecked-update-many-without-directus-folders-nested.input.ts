import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersCreateWithoutDirectus_foldersInput } from './directus-folders-create-without-directus-folders.input';
import { Type } from 'class-transformer';
import { directus_foldersCreateOrConnectWithoutDirectus_foldersInput } from './directus-folders-create-or-connect-without-directus-folders.input';
import { directus_foldersUpsertWithWhereUniqueWithoutDirectus_foldersInput } from './directus-folders-upsert-with-where-unique-without-directus-folders.input';
import { directus_foldersCreateManyDirectus_foldersInputEnvelope } from './directus-folders-create-many-directus-folders-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_foldersWhereUniqueInput } from './directus-folders-where-unique.input';
import { directus_foldersUpdateWithWhereUniqueWithoutDirectus_foldersInput } from './directus-folders-update-with-where-unique-without-directus-folders.input';
import { directus_foldersUpdateManyWithWhereWithoutDirectus_foldersInput } from './directus-folders-update-many-with-where-without-directus-folders.input';
import { directus_foldersScalarWhereInput } from './directus-folders-scalar-where.input';

@InputType()
export class directus_foldersUncheckedUpdateManyWithoutDirectus_foldersNestedInput {
  @Field(() => [directus_foldersCreateWithoutDirectus_foldersInput], {
    nullable: true,
  })
  @Type(() => directus_foldersCreateWithoutDirectus_foldersInput)
  create?: Array<directus_foldersCreateWithoutDirectus_foldersInput>;

  @Field(() => [directus_foldersCreateOrConnectWithoutDirectus_foldersInput], {
    nullable: true,
  })
  @Type(() => directus_foldersCreateOrConnectWithoutDirectus_foldersInput)
  connectOrCreate?: Array<directus_foldersCreateOrConnectWithoutDirectus_foldersInput>;

  @Field(
    () => [directus_foldersUpsertWithWhereUniqueWithoutDirectus_foldersInput],
    { nullable: true },
  )
  @Type(() => directus_foldersUpsertWithWhereUniqueWithoutDirectus_foldersInput)
  upsert?: Array<directus_foldersUpsertWithWhereUniqueWithoutDirectus_foldersInput>;

  @Field(() => directus_foldersCreateManyDirectus_foldersInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_foldersCreateManyDirectus_foldersInputEnvelope)
  createMany?: directus_foldersCreateManyDirectus_foldersInputEnvelope;

  @Field(() => [directus_foldersWhereUniqueInput], { nullable: true })
  @Type(() => directus_foldersWhereUniqueInput)
  set?: Array<Prisma.AtLeast<directus_foldersWhereUniqueInput, 'id'>>;

  @Field(() => [directus_foldersWhereUniqueInput], { nullable: true })
  @Type(() => directus_foldersWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<directus_foldersWhereUniqueInput, 'id'>>;

  @Field(() => [directus_foldersWhereUniqueInput], { nullable: true })
  @Type(() => directus_foldersWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<directus_foldersWhereUniqueInput, 'id'>>;

  @Field(() => [directus_foldersWhereUniqueInput], { nullable: true })
  @Type(() => directus_foldersWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_foldersWhereUniqueInput, 'id'>>;

  @Field(
    () => [directus_foldersUpdateWithWhereUniqueWithoutDirectus_foldersInput],
    { nullable: true },
  )
  @Type(() => directus_foldersUpdateWithWhereUniqueWithoutDirectus_foldersInput)
  update?: Array<directus_foldersUpdateWithWhereUniqueWithoutDirectus_foldersInput>;

  @Field(
    () => [directus_foldersUpdateManyWithWhereWithoutDirectus_foldersInput],
    { nullable: true },
  )
  @Type(() => directus_foldersUpdateManyWithWhereWithoutDirectus_foldersInput)
  updateMany?: Array<directus_foldersUpdateManyWithWhereWithoutDirectus_foldersInput>;

  @Field(() => [directus_foldersScalarWhereInput], { nullable: true })
  @Type(() => directus_foldersScalarWhereInput)
  deleteMany?: Array<directus_foldersScalarWhereInput>;
}
