import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentCreateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput } from './appointment-create-without-master-profile-appointment-master-service-to-master-profile.input';
import { Type } from 'class-transformer';
import { AppointmentCreateOrConnectWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput } from './appointment-create-or-connect-without-master-profile-appointment-master-service-to-master-profile.input';
import { AppointmentUpsertWithWhereUniqueWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput } from './appointment-upsert-with-where-unique-without-master-profile-appointment-master-service-to-master-profile.input';
import { AppointmentCreateManyMasterProfile_Appointment_masterServiceToMasterProfileInputEnvelope } from './appointment-create-many-master-profile-appointment-master-service-to-master-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';
import { AppointmentUpdateWithWhereUniqueWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput } from './appointment-update-with-where-unique-without-master-profile-appointment-master-service-to-master-profile.input';
import { AppointmentUpdateManyWithWhereWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput } from './appointment-update-many-with-where-without-master-profile-appointment-master-service-to-master-profile.input';
import { AppointmentScalarWhereInput } from './appointment-scalar-where.input';

@InputType()
export class AppointmentUncheckedUpdateManyWithoutMasterProfile_Appointment_masterServiceToMasterProfileNestedInput {

    @Field(() => [AppointmentCreateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput], {nullable:true})
    @Type(() => AppointmentCreateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput)
    create?: Array<AppointmentCreateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput>;

    @Field(() => [AppointmentCreateOrConnectWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput], {nullable:true})
    @Type(() => AppointmentCreateOrConnectWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput)
    connectOrCreate?: Array<AppointmentCreateOrConnectWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput>;

    @Field(() => [AppointmentUpsertWithWhereUniqueWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput], {nullable:true})
    @Type(() => AppointmentUpsertWithWhereUniqueWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput)
    upsert?: Array<AppointmentUpsertWithWhereUniqueWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput>;

    @Field(() => AppointmentCreateManyMasterProfile_Appointment_masterServiceToMasterProfileInputEnvelope, {nullable:true})
    @Type(() => AppointmentCreateManyMasterProfile_Appointment_masterServiceToMasterProfileInputEnvelope)
    createMany?: AppointmentCreateManyMasterProfile_Appointment_masterServiceToMasterProfileInputEnvelope;

    @Field(() => [AppointmentWhereUniqueInput], {nullable:true})
    @Type(() => AppointmentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>>;

    @Field(() => [AppointmentWhereUniqueInput], {nullable:true})
    @Type(() => AppointmentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>>;

    @Field(() => [AppointmentWhereUniqueInput], {nullable:true})
    @Type(() => AppointmentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>>;

    @Field(() => [AppointmentWhereUniqueInput], {nullable:true})
    @Type(() => AppointmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>>;

    @Field(() => [AppointmentUpdateWithWhereUniqueWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput], {nullable:true})
    @Type(() => AppointmentUpdateWithWhereUniqueWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput)
    update?: Array<AppointmentUpdateWithWhereUniqueWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput>;

    @Field(() => [AppointmentUpdateManyWithWhereWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput], {nullable:true})
    @Type(() => AppointmentUpdateManyWithWhereWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput)
    updateMany?: Array<AppointmentUpdateManyWithWhereWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput>;

    @Field(() => [AppointmentScalarWhereInput], {nullable:true})
    @Type(() => AppointmentScalarWhereInput)
    deleteMany?: Array<AppointmentScalarWhereInput>;
}
