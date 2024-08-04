import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersUpdateWithoutDirectus_filesInput } from './directus-folders-update-without-directus-files.input';
import { Type } from 'class-transformer';
import { directus_foldersCreateWithoutDirectus_filesInput } from './directus-folders-create-without-directus-files.input';

@InputType()
export class directus_foldersUpsertWithoutDirectus_filesInput {
  @Field(() => directus_foldersUpdateWithoutDirectus_filesInput, {
    nullable: false,
  })
  @Type(() => directus_foldersUpdateWithoutDirectus_filesInput)
  update!: directus_foldersUpdateWithoutDirectus_filesInput;

  @Field(() => directus_foldersCreateWithoutDirectus_filesInput, {
    nullable: false,
  })
  @Type(() => directus_foldersCreateWithoutDirectus_filesInput)
  create!: directus_foldersCreateWithoutDirectus_filesInput;
}
