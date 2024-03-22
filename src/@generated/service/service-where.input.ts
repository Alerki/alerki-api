import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { Directus_usersRelationFilter } from '../prisma/directus-users-relation-filter.input';
import { Service_translationsListRelationFilter } from '../service-translations/service-translations-list-relation-filter.input';

@InputType()
export class ServiceWhereInput {

    @Field(() => [ServiceWhereInput], {nullable:true})
    AND?: Array<ServiceWhereInput>;

    @Field(() => [ServiceWhereInput], {nullable:true})
    OR?: Array<ServiceWhereInput>;

    @Field(() => [ServiceWhereInput], {nullable:true})
    NOT?: Array<ServiceWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

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

    @Field(() => Directus_usersRelationFilter, {nullable:true})
    directus_users_Service_user_createdTodirectus_users?: Directus_usersRelationFilter;

    @Field(() => Directus_usersRelationFilter, {nullable:true})
    directus_users_Service_user_updatedTodirectus_users?: Directus_usersRelationFilter;

    @Field(() => Service_translationsListRelationFilter, {nullable:true})
    Service_translations?: Service_translationsListRelationFilter;
}
