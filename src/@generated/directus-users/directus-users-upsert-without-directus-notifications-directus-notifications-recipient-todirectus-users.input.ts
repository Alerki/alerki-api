import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersUpdateWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput } from './directus-users-update-without-directus-notifications-directus-notifications-recipient-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput } from './directus-users-create-without-directus-notifications-directus-notifications-recipient-todirectus-users.input';

@InputType()
export class directus_usersUpsertWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput {

    @Field(() => directus_usersUpdateWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput, {nullable:false})
    @Type(() => directus_usersUpdateWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput)
    update!: directus_usersUpdateWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput;

    @Field(() => directus_usersCreateWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput, {nullable:false})
    @Type(() => directus_usersCreateWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput)
    create!: directus_usersCreateWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput;
}
