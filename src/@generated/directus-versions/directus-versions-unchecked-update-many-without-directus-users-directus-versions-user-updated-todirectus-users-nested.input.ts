import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_versionsCreateWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput } from './directus-versions-create-without-directus-users-directus-versions-user-updated-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_versionsCreateOrConnectWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput } from './directus-versions-create-or-connect-without-directus-users-directus-versions-user-updated-todirectus-users.input';
import { directus_versionsUpsertWithWhereUniqueWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput } from './directus-versions-upsert-with-where-unique-without-directus-users-directus-versions-user-updated-todirectus-users.input';
import { directus_versionsCreateManyDirectus_users_directus_versions_user_updatedTodirectus_usersInputEnvelope } from './directus-versions-create-many-directus-users-directus-versions-user-updated-todirectus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_versionsWhereUniqueInput } from './directus-versions-where-unique.input';
import { directus_versionsUpdateWithWhereUniqueWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput } from './directus-versions-update-with-where-unique-without-directus-users-directus-versions-user-updated-todirectus-users.input';
import { directus_versionsUpdateManyWithWhereWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput } from './directus-versions-update-many-with-where-without-directus-users-directus-versions-user-updated-todirectus-users.input';
import { directus_versionsScalarWhereInput } from './directus-versions-scalar-where.input';

@InputType()
export class directus_versionsUncheckedUpdateManyWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersNestedInput {

    @Field(() => [directus_versionsCreateWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput], {nullable:true})
    @Type(() => directus_versionsCreateWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput)
    create?: Array<directus_versionsCreateWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput>;

    @Field(() => [directus_versionsCreateOrConnectWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput], {nullable:true})
    @Type(() => directus_versionsCreateOrConnectWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput)
    connectOrCreate?: Array<directus_versionsCreateOrConnectWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput>;

    @Field(() => [directus_versionsUpsertWithWhereUniqueWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput], {nullable:true})
    @Type(() => directus_versionsUpsertWithWhereUniqueWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput)
    upsert?: Array<directus_versionsUpsertWithWhereUniqueWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput>;

    @Field(() => directus_versionsCreateManyDirectus_users_directus_versions_user_updatedTodirectus_usersInputEnvelope, {nullable:true})
    @Type(() => directus_versionsCreateManyDirectus_users_directus_versions_user_updatedTodirectus_usersInputEnvelope)
    createMany?: directus_versionsCreateManyDirectus_users_directus_versions_user_updatedTodirectus_usersInputEnvelope;

    @Field(() => [directus_versionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_versionsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<directus_versionsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_versionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_versionsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<directus_versionsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_versionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_versionsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<directus_versionsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_versionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_versionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_versionsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_versionsUpdateWithWhereUniqueWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput], {nullable:true})
    @Type(() => directus_versionsUpdateWithWhereUniqueWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput)
    update?: Array<directus_versionsUpdateWithWhereUniqueWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput>;

    @Field(() => [directus_versionsUpdateManyWithWhereWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput], {nullable:true})
    @Type(() => directus_versionsUpdateManyWithWhereWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput)
    updateMany?: Array<directus_versionsUpdateManyWithWhereWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersInput>;

    @Field(() => [directus_versionsScalarWhereInput], {nullable:true})
    @Type(() => directus_versionsScalarWhereInput)
    deleteMany?: Array<directus_versionsScalarWhereInput>;
}
