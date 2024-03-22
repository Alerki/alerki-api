import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class NotificationTypeScalarWhereWithAggregatesInput {

    @Field(() => [NotificationTypeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NotificationTypeScalarWhereWithAggregatesInput>;

    @Field(() => [NotificationTypeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NotificationTypeScalarWhereWithAggregatesInput>;

    @Field(() => [NotificationTypeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NotificationTypeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    sort?: IntNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    user_created?: UuidNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_created?: DateTimeNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    user_updated?: UuidNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_updated?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
