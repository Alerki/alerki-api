import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersScalarWhereInput } from './directus-folders-scalar-where.input';
import { Type } from 'class-transformer';
import { directus_foldersUpdateManyMutationInput } from './directus-folders-update-many-mutation.input';

@InputType()
export class directus_foldersUpdateManyWithWhereWithoutDirectus_foldersInput {
  @Field(() => directus_foldersScalarWhereInput, { nullable: false })
  @Type(() => directus_foldersScalarWhereInput)
  where!: directus_foldersScalarWhereInput;

  @Field(() => directus_foldersUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_foldersUpdateManyMutationInput)
  data!: directus_foldersUpdateManyMutationInput;
}
