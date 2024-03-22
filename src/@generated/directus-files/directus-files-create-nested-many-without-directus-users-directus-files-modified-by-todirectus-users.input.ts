import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesCreateWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput } from './directus-files-create-without-directus-users-directus-files-modified-by-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_filesCreateOrConnectWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput } from './directus-files-create-or-connect-without-directus-users-directus-files-modified-by-todirectus-users.input';
import { directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInputEnvelope } from './directus-files-create-many-directus-users-directus-files-modified-by-todirectus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_filesWhereUniqueInput } from './directus-files-where-unique.input';

@InputType()
export class directus_filesCreateNestedManyWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput {

    @Field(() => [directus_filesCreateWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput], {nullable:true})
    @Type(() => directus_filesCreateWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput)
    create?: Array<directus_filesCreateWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput>;

    @Field(() => [directus_filesCreateOrConnectWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput], {nullable:true})
    @Type(() => directus_filesCreateOrConnectWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput)
    connectOrCreate?: Array<directus_filesCreateOrConnectWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput>;

    @Field(() => directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInputEnvelope, {nullable:true})
    @Type(() => directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInputEnvelope)
    createMany?: directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInputEnvelope;

    @Field(() => [directus_filesWhereUniqueInput], {nullable:true})
    @Type(() => directus_filesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_filesWhereUniqueInput, 'id'>>;
}
