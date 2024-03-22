import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';

@InputType()
export class directus_panelsScalarWhereInput {

    @Field(() => [directus_panelsScalarWhereInput], {nullable:true})
    AND?: Array<directus_panelsScalarWhereInput>;

    @Field(() => [directus_panelsScalarWhereInput], {nullable:true})
    OR?: Array<directus_panelsScalarWhereInput>;

    @Field(() => [directus_panelsScalarWhereInput], {nullable:true})
    NOT?: Array<directus_panelsScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    dashboard?: UuidFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    icon?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    color?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    show_header?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    note?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    position_x?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    position_y?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    width?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    height?: IntFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    options?: JsonNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_created?: DateTimeNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    user_created?: UuidNullableFilter;
}
