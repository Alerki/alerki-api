import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class MasterServiceScalarWhereInput {

    @Field(() => [MasterServiceScalarWhereInput], {nullable:true})
    AND?: Array<MasterServiceScalarWhereInput>;

    @Field(() => [MasterServiceScalarWhereInput], {nullable:true})
    OR?: Array<MasterServiceScalarWhereInput>;

    @Field(() => [MasterServiceScalarWhereInput], {nullable:true})
    NOT?: Array<MasterServiceScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_created?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_updated?: DateTimeNullableFilter;

    @Field(() => UuidFilter, {nullable:true})
    masterProfile?: UuidFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    duration?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => UuidFilter, {nullable:true})
    currency?: UuidFilter;

    @Field(() => IntFilter, {nullable:true})
    service?: IntFilter;
}
