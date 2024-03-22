import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentUncheckedCreateNestedManyWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput } from '../appointment/appointment-unchecked-create-nested-many-without-master-profile-appointment-master-profile-to-master-profile.input';
import { AppointmentUncheckedCreateNestedManyWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput } from '../appointment/appointment-unchecked-create-nested-many-without-master-profile-appointment-master-service-to-master-profile.input';
import { MasterServiceUncheckedCreateNestedManyWithoutMasterProfileInput } from '../master-service/master-service-unchecked-create-nested-many-without-master-profile.input';
import { UserUncheckedCreateNestedManyWithoutMasterProfileInput } from '../user/user-unchecked-create-nested-many-without-master-profile.input';

@InputType()
export class MasterProfileUncheckedCreateWithoutMasterScheduleInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => String, {nullable:false})
    masterWeeklySchedule!: string;

    @Field(() => AppointmentUncheckedCreateNestedManyWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput, {nullable:true})
    Appointment_Appointment_masterProfileToMasterProfile?: AppointmentUncheckedCreateNestedManyWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput;

    @Field(() => AppointmentUncheckedCreateNestedManyWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput, {nullable:true})
    Appointment_Appointment_masterServiceToMasterProfile?: AppointmentUncheckedCreateNestedManyWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput;

    @Field(() => MasterServiceUncheckedCreateNestedManyWithoutMasterProfileInput, {nullable:true})
    MasterService?: MasterServiceUncheckedCreateNestedManyWithoutMasterProfileInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutMasterProfileInput, {nullable:true})
    User?: UserUncheckedCreateNestedManyWithoutMasterProfileInput;
}
