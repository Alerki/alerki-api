import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_settingsWhereUniqueInput } from './directus-settings-where-unique.input';
import { Type } from 'class-transformer';
import { directus_settingsCreateWithoutDirectus_files_directus_settings_public_foregroundTodirectus_filesInput } from './directus-settings-create-without-directus-files-directus-settings-public-foreground-todirectus-files.input';

@InputType()
export class directus_settingsCreateOrConnectWithoutDirectus_files_directus_settings_public_foregroundTodirectus_filesInput {

    @Field(() => directus_settingsWhereUniqueInput, {nullable:false})
    @Type(() => directus_settingsWhereUniqueInput)
    where!: Prisma.AtLeast<directus_settingsWhereUniqueInput, 'id'>;

    @Field(() => directus_settingsCreateWithoutDirectus_files_directus_settings_public_foregroundTodirectus_filesInput, {nullable:false})
    @Type(() => directus_settingsCreateWithoutDirectus_files_directus_settings_public_foregroundTodirectus_filesInput)
    create!: directus_settingsCreateWithoutDirectus_files_directus_settings_public_foregroundTodirectus_filesInput;
}
