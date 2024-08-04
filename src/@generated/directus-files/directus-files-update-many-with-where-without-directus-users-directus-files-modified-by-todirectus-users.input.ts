import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesScalarWhereInput } from './directus-files-scalar-where.input';
import { Type } from 'class-transformer';
import { directus_filesUpdateManyMutationInput } from './directus-files-update-many-mutation.input';

@InputType()
export class directus_filesUpdateManyWithWhereWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput {
  @Field(() => directus_filesScalarWhereInput, { nullable: false })
  @Type(() => directus_filesScalarWhereInput)
  where!: directus_filesScalarWhereInput;

  @Field(() => directus_filesUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_filesUpdateManyMutationInput)
  data!: directus_filesUpdateManyMutationInput;
}
