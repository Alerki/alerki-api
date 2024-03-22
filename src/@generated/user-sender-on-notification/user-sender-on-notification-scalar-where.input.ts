import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class UserSenderOnNotificationScalarWhereInput {

    @Field(() => [UserSenderOnNotificationScalarWhereInput], {nullable:true})
    AND?: Array<UserSenderOnNotificationScalarWhereInput>;

    @Field(() => [UserSenderOnNotificationScalarWhereInput], {nullable:true})
    OR?: Array<UserSenderOnNotificationScalarWhereInput>;

    @Field(() => [UserSenderOnNotificationScalarWhereInput], {nullable:true})
    NOT?: Array<UserSenderOnNotificationScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_created?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_updated?: DateTimeNullableFilter;

    @Field(() => UuidFilter, {nullable:true})
    user?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    notification?: UuidFilter;
}
