import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Directus_usersRelationFilter } from '../prisma/directus-users-relation-filter.input';

@InputType()
export class NotificationTypeWhereInput {

    @Field(() => [NotificationTypeWhereInput], {nullable:true})
    AND?: Array<NotificationTypeWhereInput>;

    @Field(() => [NotificationTypeWhereInput], {nullable:true})
    OR?: Array<NotificationTypeWhereInput>;

    @Field(() => [NotificationTypeWhereInput], {nullable:true})
    NOT?: Array<NotificationTypeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    sort?: IntNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    user_created?: UuidNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_created?: DateTimeNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    user_updated?: UuidNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_updated?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => Directus_usersRelationFilter, {nullable:true})
    directus_users_NotificationType_user_createdTodirectus_users?: Directus_usersRelationFilter;

    @Field(() => Directus_usersRelationFilter, {nullable:true})
    directus_users_NotificationType_user_updatedTodirectus_users?: Directus_usersRelationFilter;
}
