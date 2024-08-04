import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput } from './directus-users-create-without-directus-files-directus-files-modified-by-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput } from './directus-users-create-or-connect-without-directus-files-directus-files-modified-by-todirectus-users.input';
import { directus_usersUpsertWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput } from './directus-users-upsert-without-directus-files-directus-files-modified-by-todirectus-users.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';
import { directus_usersUpdateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput } from './directus-users-update-without-directus-files-directus-files-modified-by-todirectus-users.input';

@InputType()
export class directus_usersUpdateOneWithoutDirectus_files_directus_files_modified_byTodirectus_usersNestedInput {
  @Field(
    () =>
      directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput,
  )
  create?: directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput;

  @Field(
    () =>
      directus_usersCreateOrConnectWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersCreateOrConnectWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput,
  )
  connectOrCreate?: directus_usersCreateOrConnectWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput;

  @Field(
    () =>
      directus_usersUpsertWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersUpsertWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput,
  )
  upsert?: directus_usersUpsertWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => directus_usersWhereUniqueInput, { nullable: true })
  @Type(() => directus_usersWhereUniqueInput)
  connect?: Prisma.AtLeast<
    directus_usersWhereUniqueInput,
    'id' | 'email' | 'token' | 'external_identifier'
  >;

  @Field(
    () =>
      directus_usersUpdateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersUpdateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput,
  )
  update?: directus_usersUpdateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput;
}
