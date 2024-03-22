import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_filesWhereUniqueInput } from './directus-files-where-unique.input';
import { Type } from 'class-transformer';
import { directus_filesCreateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput } from './directus-files-create-without-directus-settings-directus-settings-public-foreground-todirectus-files.input';

@InputType()
export class directus_filesCreateOrConnectWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput {

    @Field(() => directus_filesWhereUniqueInput, {nullable:false})
    @Type(() => directus_filesWhereUniqueInput)
    where!: Prisma.AtLeast<directus_filesWhereUniqueInput, 'id'>;

    @Field(() => directus_filesCreateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput, {nullable:false})
    @Type(() => directus_filesCreateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput)
    create!: directus_filesCreateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput;
}
