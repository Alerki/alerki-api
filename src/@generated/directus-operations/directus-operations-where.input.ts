import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { Directus_flowsRelationFilter } from '../prisma/directus-flows-relation-filter.input';
import { Directus_operationsRelationFilter } from '../prisma/directus-operations-relation-filter.input';
import { Directus_usersRelationFilter } from '../prisma/directus-users-relation-filter.input';

@InputType()
export class directus_operationsWhereInput {

    @Field(() => [directus_operationsWhereInput], {nullable:true})
    AND?: Array<directus_operationsWhereInput>;

    @Field(() => [directus_operationsWhereInput], {nullable:true})
    OR?: Array<directus_operationsWhereInput>;

    @Field(() => [directus_operationsWhereInput], {nullable:true})
    NOT?: Array<directus_operationsWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    position_x?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    position_y?: IntFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    options?: JsonNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    resolve?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    reject?: UuidNullableFilter;

    @Field(() => UuidFilter, {nullable:true})
    flow?: UuidFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_created?: DateTimeNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    user_created?: UuidNullableFilter;

    @Field(() => Directus_flowsRelationFilter, {nullable:true})
    directus_flows?: Directus_flowsRelationFilter;

    @Field(() => Directus_operationsRelationFilter, {nullable:true})
    directus_operations_directus_operations_rejectTodirectus_operations?: Directus_operationsRelationFilter;

    @Field(() => Directus_operationsRelationFilter, {nullable:true})
    other_directus_operations_directus_operations_rejectTodirectus_operations?: Directus_operationsRelationFilter;

    @Field(() => Directus_operationsRelationFilter, {nullable:true})
    directus_operations_directus_operations_resolveTodirectus_operations?: Directus_operationsRelationFilter;

    @Field(() => Directus_operationsRelationFilter, {nullable:true})
    other_directus_operations_directus_operations_resolveTodirectus_operations?: Directus_operationsRelationFilter;

    @Field(() => Directus_usersRelationFilter, {nullable:true})
    directus_users?: Directus_usersRelationFilter;
}
