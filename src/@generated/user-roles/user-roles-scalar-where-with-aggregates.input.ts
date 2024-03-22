import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class UserRolesScalarWhereWithAggregatesInput {

    @Field(() => [UserRolesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserRolesScalarWhereWithAggregatesInput>;

    @Field(() => [UserRolesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserRolesScalarWhereWithAggregatesInput>;

    @Field(() => [UserRolesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserRolesScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_created?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_updated?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
