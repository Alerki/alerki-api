import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class UserRolesWhereInput {

    @Field(() => [UserRolesWhereInput], {nullable:true})
    AND?: Array<UserRolesWhereInput>;

    @Field(() => [UserRolesWhereInput], {nullable:true})
    OR?: Array<UserRolesWhereInput>;

    @Field(() => [UserRolesWhereInput], {nullable:true})
    NOT?: Array<UserRolesWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_created?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_updated?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
