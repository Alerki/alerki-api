import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersUncheckedCreateNestedManyWithoutDirectus_foldersInput } from './directus-folders-unchecked-create-nested-many-without-directus-folders.input';
import { directus_settingsUncheckedCreateNestedManyWithoutDirectus_foldersInput } from '../directus-settings/directus-settings-unchecked-create-nested-many-without-directus-folders.input';

@InputType()
export class directus_foldersUncheckedCreateWithoutDirectus_filesInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    parent?: string;

    @Field(() => directus_foldersUncheckedCreateNestedManyWithoutDirectus_foldersInput, {nullable:true})
    other_directus_folders?: directus_foldersUncheckedCreateNestedManyWithoutDirectus_foldersInput;

    @Field(() => directus_settingsUncheckedCreateNestedManyWithoutDirectus_foldersInput, {nullable:true})
    directus_settings?: directus_settingsUncheckedCreateNestedManyWithoutDirectus_foldersInput;
}
