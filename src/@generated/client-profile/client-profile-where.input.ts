import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { AppointmentListRelationFilter } from '../appointment/appointment-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class ClientProfileWhereInput {

    @Field(() => [ClientProfileWhereInput], {nullable:true})
    AND?: Array<ClientProfileWhereInput>;

    @Field(() => [ClientProfileWhereInput], {nullable:true})
    OR?: Array<ClientProfileWhereInput>;

    @Field(() => [ClientProfileWhereInput], {nullable:true})
    NOT?: Array<ClientProfileWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_created?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_updated?: DateTimeNullableFilter;

    @Field(() => AppointmentListRelationFilter, {nullable:true})
    Appointment?: AppointmentListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    User?: UserListRelationFilter;
}
