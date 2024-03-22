import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesCreateWithoutDirectus_settings_directus_settings_project_logoTodirectus_filesInput } from './directus-files-create-without-directus-settings-directus-settings-project-logo-todirectus-files.input';
import { Type } from 'class-transformer';
import { directus_filesCreateOrConnectWithoutDirectus_settings_directus_settings_project_logoTodirectus_filesInput } from './directus-files-create-or-connect-without-directus-settings-directus-settings-project-logo-todirectus-files.input';
import { Prisma } from '@prisma/client';
import { directus_filesWhereUniqueInput } from './directus-files-where-unique.input';

@InputType()
export class directus_filesCreateNestedOneWithoutDirectus_settings_directus_settings_project_logoTodirectus_filesInput {

    @Field(() => directus_filesCreateWithoutDirectus_settings_directus_settings_project_logoTodirectus_filesInput, {nullable:true})
    @Type(() => directus_filesCreateWithoutDirectus_settings_directus_settings_project_logoTodirectus_filesInput)
    create?: directus_filesCreateWithoutDirectus_settings_directus_settings_project_logoTodirectus_filesInput;

    @Field(() => directus_filesCreateOrConnectWithoutDirectus_settings_directus_settings_project_logoTodirectus_filesInput, {nullable:true})
    @Type(() => directus_filesCreateOrConnectWithoutDirectus_settings_directus_settings_project_logoTodirectus_filesInput)
    connectOrCreate?: directus_filesCreateOrConnectWithoutDirectus_settings_directus_settings_project_logoTodirectus_filesInput;

    @Field(() => directus_filesWhereUniqueInput, {nullable:true})
    @Type(() => directus_filesWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_filesWhereUniqueInput, 'id'>;
}
