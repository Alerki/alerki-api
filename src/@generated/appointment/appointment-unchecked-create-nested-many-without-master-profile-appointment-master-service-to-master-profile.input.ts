import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentCreateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput } from './appointment-create-without-master-profile-appointment-master-service-to-master-profile.input';
import { Type } from 'class-transformer';
import { AppointmentCreateOrConnectWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput } from './appointment-create-or-connect-without-master-profile-appointment-master-service-to-master-profile.input';
import { AppointmentCreateManyMasterProfile_Appointment_masterServiceToMasterProfileInputEnvelope } from './appointment-create-many-master-profile-appointment-master-service-to-master-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';

@InputType()
export class AppointmentUncheckedCreateNestedManyWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput {

    @Field(() => [AppointmentCreateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput], {nullable:true})
    @Type(() => AppointmentCreateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput)
    create?: Array<AppointmentCreateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput>;

    @Field(() => [AppointmentCreateOrConnectWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput], {nullable:true})
    @Type(() => AppointmentCreateOrConnectWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput)
    connectOrCreate?: Array<AppointmentCreateOrConnectWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput>;

    @Field(() => AppointmentCreateManyMasterProfile_Appointment_masterServiceToMasterProfileInputEnvelope, {nullable:true})
    @Type(() => AppointmentCreateManyMasterProfile_Appointment_masterServiceToMasterProfileInputEnvelope)
    createMany?: AppointmentCreateManyMasterProfile_Appointment_masterServiceToMasterProfileInputEnvelope;

    @Field(() => [AppointmentWhereUniqueInput], {nullable:true})
    @Type(() => AppointmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>>;
}
