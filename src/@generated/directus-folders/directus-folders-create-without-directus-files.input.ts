import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersCreateNestedOneWithoutOther_directus_foldersInput } from './directus-folders-create-nested-one-without-other-directus-folders.input';
import { directus_foldersCreateNestedManyWithoutDirectus_foldersInput } from './directus-folders-create-nested-many-without-directus-folders.input';
import { directus_settingsCreateNestedManyWithoutDirectus_foldersInput } from '../directus-settings/directus-settings-create-nested-many-without-directus-folders.input';

@InputType()
export class directus_foldersCreateWithoutDirectus_filesInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => directus_foldersCreateNestedOneWithoutOther_directus_foldersInput, {nullable:true})
    directus_folders?: directus_foldersCreateNestedOneWithoutOther_directus_foldersInput;

    @Field(() => directus_foldersCreateNestedManyWithoutDirectus_foldersInput, {nullable:true})
    other_directus_folders?: directus_foldersCreateNestedManyWithoutDirectus_foldersInput;

    @Field(() => directus_settingsCreateNestedManyWithoutDirectus_foldersInput, {nullable:true})
    directus_settings?: directus_settingsCreateNestedManyWithoutDirectus_foldersInput;
}
