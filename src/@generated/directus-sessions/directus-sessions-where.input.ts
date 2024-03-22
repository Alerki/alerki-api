import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { Directus_sharesRelationFilter } from '../prisma/directus-shares-relation-filter.input';
import { Directus_usersRelationFilter } from '../prisma/directus-users-relation-filter.input';

@InputType()
export class directus_sessionsWhereInput {

    @Field(() => [directus_sessionsWhereInput], {nullable:true})
    AND?: Array<directus_sessionsWhereInput>;

    @Field(() => [directus_sessionsWhereInput], {nullable:true})
    OR?: Array<directus_sessionsWhereInput>;

    @Field(() => [directus_sessionsWhereInput], {nullable:true})
    NOT?: Array<directus_sessionsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    token?: StringFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    user?: UuidNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expires?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ip?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    user_agent?: StringNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    share?: UuidNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    origin?: StringNullableFilter;

    @Field(() => Directus_sharesRelationFilter, {nullable:true})
    directus_shares?: Directus_sharesRelationFilter;

    @Field(() => Directus_usersRelationFilter, {nullable:true})
    directus_users?: Directus_usersRelationFilter;
}
