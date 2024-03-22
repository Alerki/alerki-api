import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class directus_filesScalarWhereInput {

    @Field(() => [directus_filesScalarWhereInput], {nullable:true})
    AND?: Array<directus_filesScalarWhereInput>;

    @Field(() => [directus_filesScalarWhereInput], {nullable:true})
    OR?: Array<directus_filesScalarWhereInput>;

    @Field(() => [directus_filesScalarWhereInput], {nullable:true})
    NOT?: Array<directus_filesScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    storage?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    filename_disk?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    filename_download?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    type?: StringNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    folder?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    uploaded_by?: UuidNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    uploaded_on?: DateTimeFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    modified_by?: UuidNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    modified_on?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    charset?: StringNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    filesize?: BigIntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    width?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    height?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    duration?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    embed?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    location?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tags?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    focal_point_x?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    focal_point_y?: IntNullableFilter;
}
