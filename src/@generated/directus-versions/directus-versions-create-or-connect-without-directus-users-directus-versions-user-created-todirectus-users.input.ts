import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_versionsWhereUniqueInput } from './directus-versions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_versionsCreateWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput } from './directus-versions-create-without-directus-users-directus-versions-user-created-todirectus-users.input';

@InputType()
export class directus_versionsCreateOrConnectWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput {

    @Field(() => directus_versionsWhereUniqueInput, {nullable:false})
    @Type(() => directus_versionsWhereUniqueInput)
    where!: Prisma.AtLeast<directus_versionsWhereUniqueInput, 'id'>;

    @Field(() => directus_versionsCreateWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput, {nullable:false})
    @Type(() => directus_versionsCreateWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput)
    create!: directus_versionsCreateWithoutDirectus_users_directus_versions_user_createdTodirectus_usersInput;
}
