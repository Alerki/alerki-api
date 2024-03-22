import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class directus_notificationsUncheckedCreateWithoutDirectus_users_directus_notifications_recipientTodirectus_usersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    timestamp?: Date | string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:true})
    sender?: string;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => String, {nullable:true})
    collection?: string;

    @Field(() => String, {nullable:true})
    item?: string;
}
