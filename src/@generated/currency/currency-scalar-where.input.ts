import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class CurrencyScalarWhereInput {

    @Field(() => [CurrencyScalarWhereInput], {nullable:true})
    AND?: Array<CurrencyScalarWhereInput>;

    @Field(() => [CurrencyScalarWhereInput], {nullable:true})
    OR?: Array<CurrencyScalarWhereInput>;

    @Field(() => [CurrencyScalarWhereInput], {nullable:true})
    NOT?: Array<CurrencyScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

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
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    character?: StringFilter;
}
