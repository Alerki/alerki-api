import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { directus_users } from '../directus-users/directus-users.model';

@ObjectType()
export class directus_notifications {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:true})
    timestamp!: Date | null;

    @Field(() => String, {nullable:true,defaultValue:'inbox'})
    status!: string | null;

    @Field(() => String, {nullable:false})
    recipient!: string;

    @Field(() => String, {nullable:true})
    sender!: string | null;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => String, {nullable:true})
    message!: string | null;

    @Field(() => String, {nullable:true})
    collection!: string | null;

    @Field(() => String, {nullable:true})
    item!: string | null;

    @Field(() => directus_users, {nullable:false})
    directus_users_directus_notifications_recipientTodirectus_users?: directus_users;

    @Field(() => directus_users, {nullable:true})
    directus_users_directus_notifications_senderTodirectus_users?: directus_users | null;
}
