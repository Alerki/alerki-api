import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_notificationsCreateManyDirectus_users_directus_notifications_senderTodirectus_usersInput } from './directus-notifications-create-many-directus-users-directus-notifications-sender-todirectus-users.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_notificationsCreateManyDirectus_users_directus_notifications_senderTodirectus_usersInputEnvelope {

    @Field(() => [directus_notificationsCreateManyDirectus_users_directus_notifications_senderTodirectus_usersInput], {nullable:false})
    @Type(() => directus_notificationsCreateManyDirectus_users_directus_notifications_senderTodirectus_usersInput)
    data!: Array<directus_notificationsCreateManyDirectus_users_directus_notifications_senderTodirectus_usersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
