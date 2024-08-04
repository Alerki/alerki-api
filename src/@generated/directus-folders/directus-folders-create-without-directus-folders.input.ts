import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesCreateNestedManyWithoutDirectus_foldersInput } from '../directus-files/directus-files-create-nested-many-without-directus-folders.input';
import { directus_foldersCreateNestedManyWithoutDirectus_foldersInput } from './directus-folders-create-nested-many-without-directus-folders.input';
import { directus_settingsCreateNestedManyWithoutDirectus_foldersInput } from '../directus-settings/directus-settings-create-nested-many-without-directus-folders.input';

@InputType()
export class directus_foldersCreateWithoutDirectus_foldersInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => directus_filesCreateNestedManyWithoutDirectus_foldersInput, {
    nullable: true,
  })
  directus_files?: directus_filesCreateNestedManyWithoutDirectus_foldersInput;

  @Field(() => directus_foldersCreateNestedManyWithoutDirectus_foldersInput, {
    nullable: true,
  })
  other_directus_folders?: directus_foldersCreateNestedManyWithoutDirectus_foldersInput;

  @Field(() => directus_settingsCreateNestedManyWithoutDirectus_foldersInput, {
    nullable: true,
  })
  directus_settings?: directus_settingsCreateNestedManyWithoutDirectus_foldersInput;
}
