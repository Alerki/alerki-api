import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesUpdateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput } from './directus-files-update-without-directus-settings-directus-settings-public-foreground-todirectus-files.input';
import { Type } from 'class-transformer';
import { directus_filesCreateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput } from './directus-files-create-without-directus-settings-directus-settings-public-foreground-todirectus-files.input';

@InputType()
export class directus_filesUpsertWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput {

    @Field(() => directus_filesUpdateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput, {nullable:false})
    @Type(() => directus_filesUpdateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput)
    update!: directus_filesUpdateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput;

    @Field(() => directus_filesCreateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput, {nullable:false})
    @Type(() => directus_filesCreateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput)
    create!: directus_filesCreateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput;
}
