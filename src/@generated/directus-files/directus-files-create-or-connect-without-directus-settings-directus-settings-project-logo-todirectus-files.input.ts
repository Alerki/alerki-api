import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_filesWhereUniqueInput } from './directus-files-where-unique.input';
import { Type } from 'class-transformer';
import { directus_filesCreateWithoutDirectus_settings_directus_settings_project_logoTodirectus_filesInput } from './directus-files-create-without-directus-settings-directus-settings-project-logo-todirectus-files.input';

@InputType()
export class directus_filesCreateOrConnectWithoutDirectus_settings_directus_settings_project_logoTodirectus_filesInput {

    @Field(() => directus_filesWhereUniqueInput, {nullable:false})
    @Type(() => directus_filesWhereUniqueInput)
    where!: Prisma.AtLeast<directus_filesWhereUniqueInput, 'id'>;

    @Field(() => directus_filesCreateWithoutDirectus_settings_directus_settings_project_logoTodirectus_filesInput, {nullable:false})
    @Type(() => directus_filesCreateWithoutDirectus_settings_directus_settings_project_logoTodirectus_filesInput)
    create!: directus_filesCreateWithoutDirectus_settings_directus_settings_project_logoTodirectus_filesInput;
}
