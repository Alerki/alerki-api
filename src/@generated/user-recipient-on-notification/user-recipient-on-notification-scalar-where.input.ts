import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class UserRecipientOnNotificationScalarWhereInput {

    @Field(() => [UserRecipientOnNotificationScalarWhereInput], {nullable:true})
    AND?: Array<UserRecipientOnNotificationScalarWhereInput>;

    @Field(() => [UserRecipientOnNotificationScalarWhereInput], {nullable:true})
    OR?: Array<UserRecipientOnNotificationScalarWhereInput>;

    @Field(() => [UserRecipientOnNotificationScalarWhereInput], {nullable:true})
    NOT?: Array<UserRecipientOnNotificationScalarWhereInput>;

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
