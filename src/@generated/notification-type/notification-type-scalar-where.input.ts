import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class NotificationTypeScalarWhereInput {

    @Field(() => [NotificationTypeScalarWhereInput], {nullable:true})
    AND?: Array<NotificationTypeScalarWhereInput>;

    @Field(() => [NotificationTypeScalarWhereInput], {nullable:true})
    OR?: Array<NotificationTypeScalarWhereInput>;

    @Field(() => [NotificationTypeScalarWhereInput], {nullable:true})
    NOT?: Array<NotificationTypeScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    sort?: IntNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    user_created?: UuidNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_created?: DateTimeNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    user_updated?: UuidNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_updated?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
