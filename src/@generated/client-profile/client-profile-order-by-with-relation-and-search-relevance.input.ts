import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AppointmentOrderByRelationAggregateInput } from '../appointment/appointment-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { ClientProfileOrderByRelevanceInput } from './client-profile-order-by-relevance.input';

@InputType()
export class ClientProfileOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_updated?: keyof typeof SortOrder;

    @Field(() => AppointmentOrderByRelationAggregateInput, {nullable:true})
    Appointment?: AppointmentOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    User?: UserOrderByRelationAggregateInput;

    @Field(() => ClientProfileOrderByRelevanceInput, {nullable:true})
    _relevance?: ClientProfileOrderByRelevanceInput;
}
