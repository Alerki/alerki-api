import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppointmentWhereInput } from './appointment-where.input';
import { Type } from 'class-transformer';
import { AppointmentOrderByWithRelationAndSearchRelevanceInput } from './appointment-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AppointmentScalarFieldEnum } from './appointment-scalar-field.enum';

@ArgsType()
export class FindFirstAppointmentArgs {

    @Field(() => AppointmentWhereInput, {nullable:true})
    @Type(() => AppointmentWhereInput)
    where?: AppointmentWhereInput;

    @Field(() => [AppointmentOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<AppointmentOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => AppointmentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AppointmentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AppointmentScalarFieldEnum>;
}
