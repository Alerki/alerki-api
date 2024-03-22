import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ClientProfileCreateNestedOneWithoutAppointmentInput } from '../client-profile/client-profile-create-nested-one-without-appointment.input';
import { CurrencyCreateNestedOneWithoutAppointmentInput } from '../currency/currency-create-nested-one-without-appointment.input';
import { MasterProfileCreateNestedOneWithoutAppointment_Appointment_masterServiceToMasterProfileInput } from '../master-profile/master-profile-create-nested-one-without-appointment-appointment-master-service-to-master-profile.input';

@InputType()
export class AppointmentCreateWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => Date, {nullable:false})
    duration!: Date | string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Date, {nullable:false})
    startAt!: Date | string;

    @Field(() => Date, {nullable:false})
    endAt!: Date | string;

    @Field(() => Boolean, {nullable:true})
    confirmed?: boolean;

    @Field(() => Boolean, {nullable:true})
    cancelled?: boolean;

    @Field(() => ClientProfileCreateNestedOneWithoutAppointmentInput, {nullable:false})
    ClientProfile!: ClientProfileCreateNestedOneWithoutAppointmentInput;

    @Field(() => CurrencyCreateNestedOneWithoutAppointmentInput, {nullable:false})
    Currency!: CurrencyCreateNestedOneWithoutAppointmentInput;

    @Field(() => MasterProfileCreateNestedOneWithoutAppointment_Appointment_masterServiceToMasterProfileInput, {nullable:false})
    MasterProfile_Appointment_masterServiceToMasterProfile!: MasterProfileCreateNestedOneWithoutAppointment_Appointment_masterServiceToMasterProfileInput;
}
