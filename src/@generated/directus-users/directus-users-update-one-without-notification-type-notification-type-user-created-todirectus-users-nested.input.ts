import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput } from './directus-users-create-without-notification-type-notification-type-user-created-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput } from './directus-users-create-or-connect-without-notification-type-notification-type-user-created-todirectus-users.input';
import { directus_usersUpsertWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput } from './directus-users-upsert-without-notification-type-notification-type-user-created-todirectus-users.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';
import { directus_usersUpdateWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput } from './directus-users-update-without-notification-type-notification-type-user-created-todirectus-users.input';

@InputType()
export class directus_usersUpdateOneWithoutNotificationType_NotificationType_user_createdTodirectus_usersNestedInput {

    @Field(() => directus_usersCreateWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput, {nullable:true})
    @Type(() => directus_usersCreateWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput)
    create?: directus_usersCreateWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput;

    @Field(() => directus_usersCreateOrConnectWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput, {nullable:true})
    @Type(() => directus_usersCreateOrConnectWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput)
    connectOrCreate?: directus_usersCreateOrConnectWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput;

    @Field(() => directus_usersUpsertWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput, {nullable:true})
    @Type(() => directus_usersUpsertWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput)
    upsert?: directus_usersUpsertWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => directus_usersWhereUniqueInput, {nullable:true})
    @Type(() => directus_usersWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_usersWhereUniqueInput, 'id' | 'email' | 'token' | 'external_identifier'>;

    @Field(() => directus_usersUpdateWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput, {nullable:true})
    @Type(() => directus_usersUpdateWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput)
    update?: directus_usersUpdateWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput;
}
