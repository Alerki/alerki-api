import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersUpdateWithoutDirectus_versions_directus_versions_user_createdTodirectus_usersInput } from './directus-users-update-without-directus-versions-directus-versions-user-created-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutDirectus_versions_directus_versions_user_createdTodirectus_usersInput } from './directus-users-create-without-directus-versions-directus-versions-user-created-todirectus-users.input';

@InputType()
export class directus_usersUpsertWithoutDirectus_versions_directus_versions_user_createdTodirectus_usersInput {

    @Field(() => directus_usersUpdateWithoutDirectus_versions_directus_versions_user_createdTodirectus_usersInput, {nullable:false})
    @Type(() => directus_usersUpdateWithoutDirectus_versions_directus_versions_user_createdTodirectus_usersInput)
    update!: directus_usersUpdateWithoutDirectus_versions_directus_versions_user_createdTodirectus_usersInput;

    @Field(() => directus_usersCreateWithoutDirectus_versions_directus_versions_user_createdTodirectus_usersInput, {nullable:false})
    @Type(() => directus_usersCreateWithoutDirectus_versions_directus_versions_user_createdTodirectus_usersInput)
    create!: directus_usersCreateWithoutDirectus_versions_directus_versions_user_createdTodirectus_usersInput;
}
