import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentCreateWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput } from './appointment-create-without-master-profile-appointment-master-profile-to-master-profile.input';
import { Type } from 'class-transformer';
import { AppointmentCreateOrConnectWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput } from './appointment-create-or-connect-without-master-profile-appointment-master-profile-to-master-profile.input';
import { AppointmentCreateManyMasterProfile_Appointment_masterProfileToMasterProfileInputEnvelope } from './appointment-create-many-master-profile-appointment-master-profile-to-master-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';

@InputType()
export class AppointmentUncheckedCreateNestedManyWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput {

    @Field(() => [AppointmentCreateWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput], {nullable:true})
    @Type(() => AppointmentCreateWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput)
    create?: Array<AppointmentCreateWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput>;

    @Field(() => [AppointmentCreateOrConnectWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput], {nullable:true})
    @Type(() => AppointmentCreateOrConnectWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput)
    connectOrCreate?: Array<AppointmentCreateOrConnectWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput>;

    @Field(() => AppointmentCreateManyMasterProfile_Appointment_masterProfileToMasterProfileInputEnvelope, {nullable:true})
    @Type(() => AppointmentCreateManyMasterProfile_Appointment_masterProfileToMasterProfileInputEnvelope)
    createMany?: AppointmentCreateManyMasterProfile_Appointment_masterProfileToMasterProfileInputEnvelope;

    @Field(() => [AppointmentWhereUniqueInput], {nullable:true})
    @Type(() => AppointmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>>;
}
