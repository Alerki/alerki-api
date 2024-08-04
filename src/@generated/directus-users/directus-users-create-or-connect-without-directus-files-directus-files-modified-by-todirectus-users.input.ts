import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput } from './directus-users-create-without-directus-files-directus-files-modified-by-todirectus-users.input';

@InputType()
export class directus_usersCreateOrConnectWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput {
  @Field(() => directus_usersWhereUniqueInput, { nullable: false })
  @Type(() => directus_usersWhereUniqueInput)
  where!: Prisma.AtLeast<
    directus_usersWhereUniqueInput,
    'id' | 'email' | 'token' | 'external_identifier'
  >;

  @Field(
    () =>
      directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput,
    { nullable: false },
  )
  @Type(
    () =>
      directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput,
  )
  create!: directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput;
}
