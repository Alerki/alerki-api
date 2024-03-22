import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesUncheckedCreateNestedManyWithoutDirectus_foldersInput } from '../directus-files/directus-files-unchecked-create-nested-many-without-directus-folders.input';
import { directus_foldersUncheckedCreateNestedManyWithoutDirectus_foldersInput } from './directus-folders-unchecked-create-nested-many-without-directus-folders.input';
import { directus_settingsUncheckedCreateNestedManyWithoutDirectus_foldersInput } from '../directus-settings/directus-settings-unchecked-create-nested-many-without-directus-folders.input';

@InputType()
export class directus_foldersUncheckedCreateWithoutDirectus_foldersInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => directus_filesUncheckedCreateNestedManyWithoutDirectus_foldersInput, {nullable:true})
    directus_files?: directus_filesUncheckedCreateNestedManyWithoutDirectus_foldersInput;

    @Field(() => directus_foldersUncheckedCreateNestedManyWithoutDirectus_foldersInput, {nullable:true})
    other_directus_folders?: directus_foldersUncheckedCreateNestedManyWithoutDirectus_foldersInput;

    @Field(() => directus_settingsUncheckedCreateNestedManyWithoutDirectus_foldersInput, {nullable:true})
    directus_settings?: directus_settingsUncheckedCreateNestedManyWithoutDirectus_foldersInput;
}
