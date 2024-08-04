import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput } from './directus-users-create-without-directus-files-directus-files-uploaded-by-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput } from './directus-users-create-or-connect-without-directus-files-directus-files-uploaded-by-todirectus-users.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';

@InputType()
export class directus_usersCreateNestedOneWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput {
  @Field(
    () =>
      directus_usersCreateWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersCreateWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput,
  )
  create?: directus_usersCreateWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput;

  @Field(
    () =>
      directus_usersCreateOrConnectWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersCreateOrConnectWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput,
  )
  connectOrCreate?: directus_usersCreateOrConnectWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput;

  @Field(() => directus_usersWhereUniqueInput, { nullable: true })
  @Type(() => directus_usersWhereUniqueInput)
  connect?: Prisma.AtLeast<
    directus_usersWhereUniqueInput,
    'id' | 'email' | 'token' | 'external_identifier'
  >;
}
