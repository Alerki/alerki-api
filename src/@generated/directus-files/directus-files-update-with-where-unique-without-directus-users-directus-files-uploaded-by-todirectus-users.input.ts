import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_filesWhereUniqueInput } from './directus-files-where-unique.input';
import { Type } from 'class-transformer';
import { directus_filesUpdateWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput } from './directus-files-update-without-directus-users-directus-files-uploaded-by-todirectus-users.input';

@InputType()
export class directus_filesUpdateWithWhereUniqueWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput {
  @Field(() => directus_filesWhereUniqueInput, { nullable: false })
  @Type(() => directus_filesWhereUniqueInput)
  where!: Prisma.AtLeast<directus_filesWhereUniqueInput, 'id'>;

  @Field(
    () =>
      directus_filesUpdateWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput,
    { nullable: false },
  )
  @Type(
    () =>
      directus_filesUpdateWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput,
  )
  data!: directus_filesUpdateWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput;
}
