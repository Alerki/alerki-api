import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { Directus_revisionsListRelationFilter } from '../prisma/directus-revisions-list-relation-filter.input';
import { Directus_collectionsRelationFilter } from '../prisma/directus-collections-relation-filter.input';
import { Directus_usersRelationFilter } from '../prisma/directus-users-relation-filter.input';

@InputType()
export class directus_versionsWhereInput {

    @Field(() => [directus_versionsWhereInput], {nullable:true})
    AND?: Array<directus_versionsWhereInput>;

    @Field(() => [directus_versionsWhereInput], {nullable:true})
    OR?: Array<directus_versionsWhereInput>;

    @Field(() => [directus_versionsWhereInput], {nullable:true})
    NOT?: Array<directus_versionsWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    collection?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    item?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    hash?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_created?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_updated?: DateTimeNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    user_created?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    user_updated?: UuidNullableFilter;

    @Field(() => Directus_revisionsListRelationFilter, {nullable:true})
    directus_revisions?: Directus_revisionsListRelationFilter;

    @Field(() => Directus_collectionsRelationFilter, {nullable:true})
    directus_collections?: Directus_collectionsRelationFilter;

    @Field(() => Directus_usersRelationFilter, {nullable:true})
    directus_users_directus_versions_user_createdTodirectus_users?: Directus_usersRelationFilter;

    @Field(() => Directus_usersRelationFilter, {nullable:true})
    directus_users_directus_versions_user_updatedTodirectus_users?: Directus_usersRelationFilter;
}
