import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { directus_usersCreateNestedOneWithoutNotificationType_NotificationType_user_updatedTodirectus_usersInput } from '../directus-users/directus-users-create-nested-one-without-notification-type-notification-type-user-updated-todirectus-users.input';

@InputType()
export class NotificationTypeCreateWithoutDirectus_users_NotificationType_user_createdTodirectus_usersInput {

    @Field(() => Int, {nullable:true})
    sort?: number;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => directus_usersCreateNestedOneWithoutNotificationType_NotificationType_user_updatedTodirectus_usersInput, {nullable:true})
    directus_users_NotificationType_user_updatedTodirectus_users?: directus_usersCreateNestedOneWithoutNotificationType_NotificationType_user_updatedTodirectus_usersInput;
}
