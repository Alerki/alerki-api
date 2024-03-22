import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_notificationsCreateWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput } from './directus-notifications-create-without-directus-users-directus-notifications-recipient-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_notificationsCreateOrConnectWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput } from './directus-notifications-create-or-connect-without-directus-users-directus-notifications-recipient-todirectus-users.input';
import { directus_notificationsCreateManyDirectus_users_directus_notifications_recipientTodirectus_usersInputEnvelope } from './directus-notifications-create-many-directus-users-directus-notifications-recipient-todirectus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_notificationsWhereUniqueInput } from './directus-notifications-where-unique.input';

@InputType()
export class directus_notificationsCreateNestedManyWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput {

    @Field(() => [directus_notificationsCreateWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput], {nullable:true})
    @Type(() => directus_notificationsCreateWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput)
    create?: Array<directus_notificationsCreateWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput>;

    @Field(() => [directus_notificationsCreateOrConnectWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput], {nullable:true})
    @Type(() => directus_notificationsCreateOrConnectWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput)
    connectOrCreate?: Array<directus_notificationsCreateOrConnectWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput>;

    @Field(() => directus_notificationsCreateManyDirectus_users_directus_notifications_recipientTodirectus_usersInputEnvelope, {nullable:true})
    @Type(() => directus_notificationsCreateManyDirectus_users_directus_notifications_recipientTodirectus_usersInputEnvelope)
    createMany?: directus_notificationsCreateManyDirectus_users_directus_notifications_recipientTodirectus_usersInputEnvelope;

    @Field(() => [directus_notificationsWhereUniqueInput], {nullable:true})
    @Type(() => directus_notificationsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_notificationsWhereUniqueInput, 'id'>>;
}
