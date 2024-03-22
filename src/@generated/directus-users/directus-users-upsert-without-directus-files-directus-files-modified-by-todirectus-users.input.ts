import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersUpdateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput } from './directus-users-update-without-directus-files-directus-files-modified-by-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput } from './directus-users-create-without-directus-files-directus-files-modified-by-todirectus-users.input';

@InputType()
export class directus_usersUpsertWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput {

    @Field(() => directus_usersUpdateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput, {nullable:false})
    @Type(() => directus_usersUpdateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput)
    update!: directus_usersUpdateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput;

    @Field(() => directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput, {nullable:false})
    @Type(() => directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput)
    create!: directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput;
}
