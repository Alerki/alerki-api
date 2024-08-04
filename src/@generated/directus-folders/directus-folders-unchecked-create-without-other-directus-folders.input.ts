import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesUncheckedCreateNestedManyWithoutDirectus_foldersInput } from '../directus-files/directus-files-unchecked-create-nested-many-without-directus-folders.input';
import { directus_settingsUncheckedCreateNestedManyWithoutDirectus_foldersInput } from '../directus-settings/directus-settings-unchecked-create-nested-many-without-directus-folders.input';

@InputType()
export class directus_foldersUncheckedCreateWithoutOther_directus_foldersInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  parent?: string;

  @Field(
    () => directus_filesUncheckedCreateNestedManyWithoutDirectus_foldersInput,
    { nullable: true },
  )
  directus_files?: directus_filesUncheckedCreateNestedManyWithoutDirectus_foldersInput;

  @Field(
    () =>
      directus_settingsUncheckedCreateNestedManyWithoutDirectus_foldersInput,
    { nullable: true },
  )
  directus_settings?: directus_settingsUncheckedCreateNestedManyWithoutDirectus_foldersInput;
}
