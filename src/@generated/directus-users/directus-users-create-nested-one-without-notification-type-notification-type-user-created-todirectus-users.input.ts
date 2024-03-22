import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput } from './directus-users-create-without-notification-type-notification-type-user-created-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput } from './directus-users-create-or-connect-without-notification-type-notification-type-user-created-todirectus-users.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';

@InputType()
export class directus_usersCreateNestedOneWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput {

    @Field(() => directus_usersCreateWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput, {nullable:true})
    @Type(() => directus_usersCreateWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput)
    create?: directus_usersCreateWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput;

    @Field(() => directus_usersCreateOrConnectWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput, {nullable:true})
    @Type(() => directus_usersCreateOrConnectWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput)
    connectOrCreate?: directus_usersCreateOrConnectWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput;

    @Field(() => directus_usersWhereUniqueInput, {nullable:true})
    @Type(() => directus_usersWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_usersWhereUniqueInput, 'id' | 'email' | 'token' | 'external_identifier'>;
}
