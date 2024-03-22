import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Directus_usersRelationFilter } from '../prisma/directus-users-relation-filter.input';

@InputType()
export class directus_notificationsWhereInput {

    @Field(() => [directus_notificationsWhereInput], {nullable:true})
    AND?: Array<directus_notificationsWhereInput>;

    @Field(() => [directus_notificationsWhereInput], {nullable:true})
    OR?: Array<directus_notificationsWhereInput>;

    @Field(() => [directus_notificationsWhereInput], {nullable:true})
    NOT?: Array<directus_notificationsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    timestamp?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    status?: StringNullableFilter;

    @Field(() => UuidFilter, {nullable:true})
    recipient?: UuidFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    sender?: UuidNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    subject?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    message?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    collection?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    item?: StringNullableFilter;

    @Field(() => Directus_usersRelationFilter, {nullable:true})
    directus_users_directus_notifications_recipientTodirectus_users?: Directus_usersRelationFilter;

    @Field(() => Directus_usersRelationFilter, {nullable:true})
    directus_users_directus_notifications_senderTodirectus_users?: Directus_usersRelationFilter;
}
