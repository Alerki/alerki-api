import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClientProfileOrderByWithRelationAndSearchRelevanceInput } from '../client-profile/client-profile-order-by-with-relation-and-search-relevance.input';
import { CurrencyOrderByWithRelationAndSearchRelevanceInput } from '../currency/currency-order-by-with-relation-and-search-relevance.input';
import { MasterProfileOrderByWithRelationAndSearchRelevanceInput } from '../master-profile/master-profile-order-by-with-relation-and-search-relevance.input';
import { AppointmentOrderByRelevanceInput } from './appointment-order-by-relevance.input';

@InputType()
export class AppointmentOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_updated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    masterService?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clientProfile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    masterProfile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    confirmed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cancelled?: keyof typeof SortOrder;

    @Field(() => ClientProfileOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    ClientProfile?: ClientProfileOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => CurrencyOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    Currency?: CurrencyOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => MasterProfileOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    MasterProfile_Appointment_masterProfileToMasterProfile?: MasterProfileOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => MasterProfileOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    MasterProfile_Appointment_masterServiceToMasterProfile?: MasterProfileOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => AppointmentOrderByRelevanceInput, {nullable:true})
    _relevance?: AppointmentOrderByRelevanceInput;
}
