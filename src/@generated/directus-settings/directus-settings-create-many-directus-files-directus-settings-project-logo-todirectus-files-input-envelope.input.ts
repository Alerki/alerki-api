import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_settingsCreateManyDirectus_files_directus_settings_project_logoTodirectus_filesInput } from './directus-settings-create-many-directus-files-directus-settings-project-logo-todirectus-files.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_settingsCreateManyDirectus_files_directus_settings_project_logoTodirectus_filesInputEnvelope {

    @Field(() => [directus_settingsCreateManyDirectus_files_directus_settings_project_logoTodirectus_filesInput], {nullable:false})
    @Type(() => directus_settingsCreateManyDirectus_files_directus_settings_project_logoTodirectus_filesInput)
    data!: Array<directus_settingsCreateManyDirectus_files_directus_settings_project_logoTodirectus_filesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
