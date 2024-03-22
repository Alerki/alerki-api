import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_notificationsWhereUniqueInput } from './directus-notifications-where-unique.input';
import { Type } from 'class-transformer';
import { directus_notificationsUpdateWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput } from './directus-notifications-update-without-directus-users-directus-notifications-recipient-todirectus-users.input';

@InputType()
export class directus_notificationsUpdateWithWhereUniqueWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput {

    @Field(() => directus_notificationsWhereUniqueInput, {nullable:false})
    @Type(() => directus_notificationsWhereUniqueInput)
    where!: Prisma.AtLeast<directus_notificationsWhereUniqueInput, 'id'>;

    @Field(() => directus_notificationsUpdateWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput, {nullable:false})
    @Type(() => directus_notificationsUpdateWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput)
    data!: directus_notificationsUpdateWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput;
}
