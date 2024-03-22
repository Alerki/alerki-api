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
import { Directus_dashboardsRelationFilter } from '../prisma/directus-dashboards-relation-filter.input';
import { Directus_usersRelationFilter } from '../prisma/directus-users-relation-filter.input';

@InputType()
export class directus_panelsWhereInput {

    @Field(() => [directus_panelsWhereInput], {nullable:true})
    AND?: Array<directus_panelsWhereInput>;

    @Field(() => [directus_panelsWhereInput], {nullable:true})
    OR?: Array<directus_panelsWhereInput>;

    @Field(() => [directus_panelsWhereInput], {nullable:true})
    NOT?: Array<directus_panelsWhereInput>;

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

    @Field(() => Directus_dashboardsRelationFilter, {nullable:true})
    directus_dashboards?: Directus_dashboardsRelationFilter;

    @Field(() => Directus_usersRelationFilter, {nullable:true})
    directus_users?: Directus_usersRelationFilter;
}
