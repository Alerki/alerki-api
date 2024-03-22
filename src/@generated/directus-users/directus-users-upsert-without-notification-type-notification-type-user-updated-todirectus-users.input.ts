import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersUpdateWithoutNotificationType_NotificationType_user_updatedTodirectus_usersInput } from './directus-users-update-without-notification-type-notification-type-user-updated-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutNotificationType_NotificationType_user_updatedTodirectus_usersInput } from './directus-users-create-without-notification-type-notification-type-user-updated-todirectus-users.input';

@InputType()
export class directus_usersUpsertWithoutNotificationType_NotificationType_user_updatedTodirectus_usersInput {

    @Field(() => directus_usersUpdateWithoutNotificationType_NotificationType_user_updatedTodirectus_usersInput, {nullable:false})
    @Type(() => directus_usersUpdateWithoutNotificationType_NotificationType_user_updatedTodirectus_usersInput)
    update!: directus_usersUpdateWithoutNotificationType_NotificationType_user_updatedTodirectus_usersInput;

    @Field(() => directus_usersCreateWithoutNotificationType_NotificationType_user_updatedTodirectus_usersInput, {nullable:false})
    @Type(() => directus_usersCreateWithoutNotificationType_NotificationType_user_updatedTodirectus_usersInput)
    create!: directus_usersCreateWithoutNotificationType_NotificationType_user_updatedTodirectus_usersInput;
}
