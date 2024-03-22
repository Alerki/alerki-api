import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_notificationsWhereInput } from '../directus-notifications/directus-notifications-where.input';

@InputType()
export class Directus_notificationsListRelationFilter {

    @Field(() => directus_notificationsWhereInput, {nullable:true})
    every?: directus_notificationsWhereInput;

    @Field(() => directus_notificationsWhereInput, {nullable:true})
    some?: directus_notificationsWhereInput;

    @Field(() => directus_notificationsWhereInput, {nullable:true})
    none?: directus_notificationsWhereInput;
}
