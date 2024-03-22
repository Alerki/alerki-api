import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutDirectus_versions_directus_versions_user_updatedTodirectus_usersInput } from './directus-users-create-without-directus-versions-directus-versions-user-updated-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutDirectus_versions_directus_versions_user_updatedTodirectus_usersInput } from './directus-users-create-or-connect-without-directus-versions-directus-versions-user-updated-todirectus-users.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';

@InputType()
export class directus_usersCreateNestedOneWithoutDirectus_versions_directus_versions_user_updatedTodirectus_usersInput {

    @Field(() => directus_usersCreateWithoutDirectus_versions_directus_versions_user_updatedTodirectus_usersInput, {nullable:true})
    @Type(() => directus_usersCreateWithoutDirectus_versions_directus_versions_user_updatedTodirectus_usersInput)
    create?: directus_usersCreateWithoutDirectus_versions_directus_versions_user_updatedTodirectus_usersInput;

    @Field(() => directus_usersCreateOrConnectWithoutDirectus_versions_directus_versions_user_updatedTodirectus_usersInput, {nullable:true})
    @Type(() => directus_usersCreateOrConnectWithoutDirectus_versions_directus_versions_user_updatedTodirectus_usersInput)
    connectOrCreate?: directus_usersCreateOrConnectWithoutDirectus_versions_directus_versions_user_updatedTodirectus_usersInput;

    @Field(() => directus_usersWhereUniqueInput, {nullable:true})
    @Type(() => directus_usersWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_usersWhereUniqueInput, 'id' | 'email' | 'token' | 'external_identifier'>;
}
