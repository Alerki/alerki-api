import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesUpdateWithoutDirectus_settings_directus_settings_public_backgroundTodirectus_filesInput } from './directus-files-update-without-directus-settings-directus-settings-public-background-todirectus-files.input';
import { Type } from 'class-transformer';
import { directus_filesCreateWithoutDirectus_settings_directus_settings_public_backgroundTodirectus_filesInput } from './directus-files-create-without-directus-settings-directus-settings-public-background-todirectus-files.input';

@InputType()
export class directus_filesUpsertWithoutDirectus_settings_directus_settings_public_backgroundTodirectus_filesInput {

    @Field(() => directus_filesUpdateWithoutDirectus_settings_directus_settings_public_backgroundTodirectus_filesInput, {nullable:false})
    @Type(() => directus_filesUpdateWithoutDirectus_settings_directus_settings_public_backgroundTodirectus_filesInput)
    update!: directus_filesUpdateWithoutDirectus_settings_directus_settings_public_backgroundTodirectus_filesInput;

    @Field(() => directus_filesCreateWithoutDirectus_settings_directus_settings_public_backgroundTodirectus_filesInput, {nullable:false})
    @Type(() => directus_filesCreateWithoutDirectus_settings_directus_settings_public_backgroundTodirectus_filesInput)
    create!: directus_filesCreateWithoutDirectus_settings_directus_settings_public_backgroundTodirectus_filesInput;
}
