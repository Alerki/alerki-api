import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateNestedOneWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput } from '../directus-users/directus-users-create-nested-one-without-directus-notifications-directus-notifications-recipient-todirectus-users.input';

@InputType()
export class directus_notificationsCreateWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput {

    @Field(() => Date, {nullable:true})
    timestamp?: Date | string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => String, {nullable:true})
    collection?: string;

    @Field(() => String, {nullable:true})
    item?: string;

    @Field(() => directus_usersCreateNestedOneWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput, {nullable:false})
    directus_users_directus_notifications_recipientTodirectus_users!: directus_usersCreateNestedOneWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersInput;
}
