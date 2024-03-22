import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';

@InputType()
export class directus_usersScalarWhereInput {

    @Field(() => [directus_usersScalarWhereInput], {nullable:true})
    AND?: Array<directus_usersScalarWhereInput>;

    @Field(() => [directus_usersScalarWhereInput], {nullable:true})
    OR?: Array<directus_usersScalarWhereInput>;

    @Field(() => [directus_usersScalarWhereInput], {nullable:true})
    NOT?: Array<directus_usersScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    first_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    last_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    location?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    tags?: JsonNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    avatar?: UuidNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    language?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tfa_secret?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    role?: UuidNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    token?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    last_access?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    last_page?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    provider?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    external_identifier?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    auth_data?: JsonNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    email_notifications?: BoolNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    appearance?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    theme_dark?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    theme_light?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    theme_light_overrides?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    theme_dark_overrides?: JsonNullableFilter;
}
