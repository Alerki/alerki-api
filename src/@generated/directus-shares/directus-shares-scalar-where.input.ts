import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class directus_sharesScalarWhereInput {

    @Field(() => [directus_sharesScalarWhereInput], {nullable:true})
    AND?: Array<directus_sharesScalarWhereInput>;

    @Field(() => [directus_sharesScalarWhereInput], {nullable:true})
    OR?: Array<directus_sharesScalarWhereInput>;

    @Field(() => [directus_sharesScalarWhereInput], {nullable:true})
    NOT?: Array<directus_sharesScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    collection?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    item?: StringFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    role?: UuidNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    user_created?: UuidNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_created?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_start?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_end?: DateTimeNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    times_used?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    max_uses?: IntNullableFilter;
}
