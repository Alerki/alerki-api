import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesCreateWithoutDirectus_foldersInput } from './directus-files-create-without-directus-folders.input';
import { Type } from 'class-transformer';
import { directus_filesCreateOrConnectWithoutDirectus_foldersInput } from './directus-files-create-or-connect-without-directus-folders.input';
import { directus_filesUpsertWithWhereUniqueWithoutDirectus_foldersInput } from './directus-files-upsert-with-where-unique-without-directus-folders.input';
import { directus_filesCreateManyDirectus_foldersInputEnvelope } from './directus-files-create-many-directus-folders-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_filesWhereUniqueInput } from './directus-files-where-unique.input';
import { directus_filesUpdateWithWhereUniqueWithoutDirectus_foldersInput } from './directus-files-update-with-where-unique-without-directus-folders.input';
import { directus_filesUpdateManyWithWhereWithoutDirectus_foldersInput } from './directus-files-update-many-with-where-without-directus-folders.input';
import { directus_filesScalarWhereInput } from './directus-files-scalar-where.input';

@InputType()
export class directus_filesUncheckedUpdateManyWithoutDirectus_foldersNestedInput {
  @Field(() => [directus_filesCreateWithoutDirectus_foldersInput], {
    nullable: true,
  })
  @Type(() => directus_filesCreateWithoutDirectus_foldersInput)
  create?: Array<directus_filesCreateWithoutDirectus_foldersInput>;

  @Field(() => [directus_filesCreateOrConnectWithoutDirectus_foldersInput], {
    nullable: true,
  })
  @Type(() => directus_filesCreateOrConnectWithoutDirectus_foldersInput)
  connectOrCreate?: Array<directus_filesCreateOrConnectWithoutDirectus_foldersInput>;

  @Field(
    () => [directus_filesUpsertWithWhereUniqueWithoutDirectus_foldersInput],
    { nullable: true },
  )
  @Type(() => directus_filesUpsertWithWhereUniqueWithoutDirectus_foldersInput)
  upsert?: Array<directus_filesUpsertWithWhereUniqueWithoutDirectus_foldersInput>;

  @Field(() => directus_filesCreateManyDirectus_foldersInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_filesCreateManyDirectus_foldersInputEnvelope)
  createMany?: directus_filesCreateManyDirectus_foldersInputEnvelope;

  @Field(() => [directus_filesWhereUniqueInput], { nullable: true })
  @Type(() => directus_filesWhereUniqueInput)
  set?: Array<Prisma.AtLeast<directus_filesWhereUniqueInput, 'id'>>;

  @Field(() => [directus_filesWhereUniqueInput], { nullable: true })
  @Type(() => directus_filesWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<directus_filesWhereUniqueInput, 'id'>>;

  @Field(() => [directus_filesWhereUniqueInput], { nullable: true })
  @Type(() => directus_filesWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<directus_filesWhereUniqueInput, 'id'>>;

  @Field(() => [directus_filesWhereUniqueInput], { nullable: true })
  @Type(() => directus_filesWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_filesWhereUniqueInput, 'id'>>;

  @Field(
    () => [directus_filesUpdateWithWhereUniqueWithoutDirectus_foldersInput],
    { nullable: true },
  )
  @Type(() => directus_filesUpdateWithWhereUniqueWithoutDirectus_foldersInput)
  update?: Array<directus_filesUpdateWithWhereUniqueWithoutDirectus_foldersInput>;

  @Field(
    () => [directus_filesUpdateManyWithWhereWithoutDirectus_foldersInput],
    { nullable: true },
  )
  @Type(() => directus_filesUpdateManyWithWhereWithoutDirectus_foldersInput)
  updateMany?: Array<directus_filesUpdateManyWithWhereWithoutDirectus_foldersInput>;

  @Field(() => [directus_filesScalarWhereInput], { nullable: true })
  @Type(() => directus_filesScalarWhereInput)
  deleteMany?: Array<directus_filesScalarWhereInput>;
}
