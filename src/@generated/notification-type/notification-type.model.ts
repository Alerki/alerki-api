import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { directus_users } from '../directus-users/directus-users.model';

@ObjectType()
export class NotificationType {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    sort!: number | null;

    @Field(() => String, {nullable:true})
    user_created!: string | null;

    @Field(() => Date, {nullable:true})
    date_created!: Date | null;

    @Field(() => String, {nullable:true})
    user_updated!: string | null;

    @Field(() => Date, {nullable:true})
    date_updated!: Date | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => directus_users, {nullable:true})
    directus_users_NotificationType_user_createdTodirectus_users?: directus_users | null;

    @Field(() => directus_users, {nullable:true})
    directus_users_NotificationType_user_updatedTodirectus_users?: directus_users | null;
}
