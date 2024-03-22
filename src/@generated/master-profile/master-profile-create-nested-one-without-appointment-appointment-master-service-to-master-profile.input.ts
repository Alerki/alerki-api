import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileCreateWithoutAppointment_Appointment_masterServiceToMasterProfileInput } from './master-profile-create-without-appointment-appointment-master-service-to-master-profile.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateOrConnectWithoutAppointment_Appointment_masterServiceToMasterProfileInput } from './master-profile-create-or-connect-without-appointment-appointment-master-service-to-master-profile.input';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';

@InputType()
export class MasterProfileCreateNestedOneWithoutAppointment_Appointment_masterServiceToMasterProfileInput {

    @Field(() => MasterProfileCreateWithoutAppointment_Appointment_masterServiceToMasterProfileInput, {nullable:true})
    @Type(() => MasterProfileCreateWithoutAppointment_Appointment_masterServiceToMasterProfileInput)
    create?: MasterProfileCreateWithoutAppointment_Appointment_masterServiceToMasterProfileInput;

    @Field(() => MasterProfileCreateOrConnectWithoutAppointment_Appointment_masterServiceToMasterProfileInput, {nullable:true})
    @Type(() => MasterProfileCreateOrConnectWithoutAppointment_Appointment_masterServiceToMasterProfileInput)
    connectOrCreate?: MasterProfileCreateOrConnectWithoutAppointment_Appointment_masterServiceToMasterProfileInput;

    @Field(() => MasterProfileWhereUniqueInput, {nullable:true})
    @Type(() => MasterProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;
}
