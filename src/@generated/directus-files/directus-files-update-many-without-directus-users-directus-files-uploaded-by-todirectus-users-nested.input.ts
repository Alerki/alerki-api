import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesCreateWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput } from './directus-files-create-without-directus-users-directus-files-uploaded-by-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_filesCreateOrConnectWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput } from './directus-files-create-or-connect-without-directus-users-directus-files-uploaded-by-todirectus-users.input';
import { directus_filesUpsertWithWhereUniqueWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput } from './directus-files-upsert-with-where-unique-without-directus-users-directus-files-uploaded-by-todirectus-users.input';
import { directus_filesCreateManyDirectus_users_directus_files_uploaded_byTodirectus_usersInputEnvelope } from './directus-files-create-many-directus-users-directus-files-uploaded-by-todirectus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_filesWhereUniqueInput } from './directus-files-where-unique.input';
import { directus_filesUpdateWithWhereUniqueWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput } from './directus-files-update-with-where-unique-without-directus-users-directus-files-uploaded-by-todirectus-users.input';
import { directus_filesUpdateManyWithWhereWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput } from './directus-files-update-many-with-where-without-directus-users-directus-files-uploaded-by-todirectus-users.input';
import { directus_filesScalarWhereInput } from './directus-files-scalar-where.input';

@InputType()
export class directus_filesUpdateManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersNestedInput {
  @Field(
    () => [
      directus_filesCreateWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      directus_filesCreateWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput,
  )
  create?: Array<directus_filesCreateWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput>;

  @Field(
    () => [
      directus_filesCreateOrConnectWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      directus_filesCreateOrConnectWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput,
  )
  connectOrCreate?: Array<directus_filesCreateOrConnectWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput>;

  @Field(
    () => [
      directus_filesUpsertWithWhereUniqueWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      directus_filesUpsertWithWhereUniqueWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput,
  )
  upsert?: Array<directus_filesUpsertWithWhereUniqueWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput>;

  @Field(
    () =>
      directus_filesCreateManyDirectus_users_directus_files_uploaded_byTodirectus_usersInputEnvelope,
    { nullable: true },
  )
  @Type(
    () =>
      directus_filesCreateManyDirectus_users_directus_files_uploaded_byTodirectus_usersInputEnvelope,
  )
  createMany?: directus_filesCreateManyDirectus_users_directus_files_uploaded_byTodirectus_usersInputEnvelope;

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
    () => [
      directus_filesUpdateWithWhereUniqueWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      directus_filesUpdateWithWhereUniqueWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput,
  )
  update?: Array<directus_filesUpdateWithWhereUniqueWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput>;

  @Field(
    () => [
      directus_filesUpdateManyWithWhereWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      directus_filesUpdateManyWithWhereWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput,
  )
  updateMany?: Array<directus_filesUpdateManyWithWhereWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput>;

  @Field(() => [directus_filesScalarWhereInput], { nullable: true })
  @Type(() => directus_filesScalarWhereInput)
  deleteMany?: Array<directus_filesScalarWhereInput>;
}
