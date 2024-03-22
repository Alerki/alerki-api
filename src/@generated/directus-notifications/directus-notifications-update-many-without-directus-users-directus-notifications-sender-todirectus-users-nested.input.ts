import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_notificationsCreateWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput } from './directus-notifications-create-without-directus-users-directus-notifications-sender-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_notificationsCreateOrConnectWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput } from './directus-notifications-create-or-connect-without-directus-users-directus-notifications-sender-todirectus-users.input';
import { directus_notificationsUpsertWithWhereUniqueWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput } from './directus-notifications-upsert-with-where-unique-without-directus-users-directus-notifications-sender-todirectus-users.input';
import { directus_notificationsCreateManyDirectus_users_directus_notifications_senderTodirectus_usersInputEnvelope } from './directus-notifications-create-many-directus-users-directus-notifications-sender-todirectus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_notificationsWhereUniqueInput } from './directus-notifications-where-unique.input';
import { directus_notificationsUpdateWithWhereUniqueWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput } from './directus-notifications-update-with-where-unique-without-directus-users-directus-notifications-sender-todirectus-users.input';
import { directus_notificationsUpdateManyWithWhereWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput } from './directus-notifications-update-many-with-where-without-directus-users-directus-notifications-sender-todirectus-users.input';
import { directus_notificationsScalarWhereInput } from './directus-notifications-scalar-where.input';

@InputType()
export class directus_notificationsUpdateManyWithoutDirectus_users_directus_notifications_senderTodirectus_usersNestedInput {

    @Field(() => [directus_notificationsCreateWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput], {nullable:true})
    @Type(() => directus_notificationsCreateWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput)
    create?: Array<directus_notificationsCreateWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput>;

    @Field(() => [directus_notificationsCreateOrConnectWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput], {nullable:true})
    @Type(() => directus_notificationsCreateOrConnectWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput)
    connectOrCreate?: Array<directus_notificationsCreateOrConnectWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput>;

    @Field(() => [directus_notificationsUpsertWithWhereUniqueWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput], {nullable:true})
    @Type(() => directus_notificationsUpsertWithWhereUniqueWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput)
    upsert?: Array<directus_notificationsUpsertWithWhereUniqueWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput>;

    @Field(() => directus_notificationsCreateManyDirectus_users_directus_notifications_senderTodirectus_usersInputEnvelope, {nullable:true})
    @Type(() => directus_notificationsCreateManyDirectus_users_directus_notifications_senderTodirectus_usersInputEnvelope)
    createMany?: directus_notificationsCreateManyDirectus_users_directus_notifications_senderTodirectus_usersInputEnvelope;

    @Field(() => [directus_notificationsWhereUniqueInput], {nullable:true})
    @Type(() => directus_notificationsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<directus_notificationsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_notificationsWhereUniqueInput], {nullable:true})
    @Type(() => directus_notificationsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<directus_notificationsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_notificationsWhereUniqueInput], {nullable:true})
    @Type(() => directus_notificationsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<directus_notificationsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_notificationsWhereUniqueInput], {nullable:true})
    @Type(() => directus_notificationsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_notificationsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_notificationsUpdateWithWhereUniqueWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput], {nullable:true})
    @Type(() => directus_notificationsUpdateWithWhereUniqueWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput)
    update?: Array<directus_notificationsUpdateWithWhereUniqueWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput>;

    @Field(() => [directus_notificationsUpdateManyWithWhereWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput], {nullable:true})
    @Type(() => directus_notificationsUpdateManyWithWhereWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput)
    updateMany?: Array<directus_notificationsUpdateManyWithWhereWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput>;

    @Field(() => [directus_notificationsScalarWhereInput], {nullable:true})
    @Type(() => directus_notificationsScalarWhereInput)
    deleteMany?: Array<directus_notificationsScalarWhereInput>;
}
