import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class UserPictureScalarWhereWithAggregatesInput {

    @Field(() => [UserPictureScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserPictureScalarWhereWithAggregatesInput>;

    @Field(() => [UserPictureScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserPictureScalarWhereWithAggregatesInput>;

    @Field(() => [UserPictureScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserPictureScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_created?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_updated?: DateTimeNullableWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    picture?: UuidWithAggregatesFilter;
}
