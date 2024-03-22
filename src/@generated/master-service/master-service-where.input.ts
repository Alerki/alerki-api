import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { CurrencyRelationFilter } from '../currency/currency-relation-filter.input';
import { MasterProfileRelationFilter } from '../master-profile/master-profile-relation-filter.input';
import { Service_translationsRelationFilter } from '../service-translations/service-translations-relation-filter.input';

@InputType()
export class MasterServiceWhereInput {

    @Field(() => [MasterServiceWhereInput], {nullable:true})
    AND?: Array<MasterServiceWhereInput>;

    @Field(() => [MasterServiceWhereInput], {nullable:true})
    OR?: Array<MasterServiceWhereInput>;

    @Field(() => [MasterServiceWhereInput], {nullable:true})
    NOT?: Array<MasterServiceWhereInput>;

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

    @Field(() => CurrencyRelationFilter, {nullable:true})
    Currency?: CurrencyRelationFilter;

    @Field(() => MasterProfileRelationFilter, {nullable:true})
    MasterProfile?: MasterProfileRelationFilter;

    @Field(() => Service_translationsRelationFilter, {nullable:true})
    Service_translations?: Service_translationsRelationFilter;
}
