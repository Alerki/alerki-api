import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';

@InputType()
export class User_SessionScalarWhereWithAggregatesInput {

    @Field(() => [User_SessionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<User_SessionScalarWhereWithAggregatesInput>;

    @Field(() => [User_SessionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<User_SessionScalarWhereWithAggregatesInput>;

    @Field(() => [User_SessionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<User_SessionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    User_id?: UuidNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    Session_id?: UuidNullableWithAggregatesFilter;
}
