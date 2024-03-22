import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { AppointmentUncheckedUpdateManyWithoutMasterProfile_Appointment_masterProfileToMasterProfileNestedInput } from '../appointment/appointment-unchecked-update-many-without-master-profile-appointment-master-profile-to-master-profile-nested.input';
import { MasterScheduleUncheckedUpdateManyWithoutMasterProfileNestedInput } from '../master-schedule/master-schedule-unchecked-update-many-without-master-profile-nested.input';
import { MasterServiceUncheckedUpdateManyWithoutMasterProfileNestedInput } from '../master-service/master-service-unchecked-update-many-without-master-profile-nested.input';
import { UserUncheckedUpdateManyWithoutMasterProfileNestedInput } from '../user/user-unchecked-update-many-without-master-profile-nested.input';

@InputType()
export class MasterProfileUncheckedUpdateWithoutAppointment_Appointment_masterServiceToMasterProfileInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_created?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_updated?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    masterWeeklySchedule?: StringFieldUpdateOperationsInput;

    @Field(() => AppointmentUncheckedUpdateManyWithoutMasterProfile_Appointment_masterProfileToMasterProfileNestedInput, {nullable:true})
    Appointment_Appointment_masterProfileToMasterProfile?: AppointmentUncheckedUpdateManyWithoutMasterProfile_Appointment_masterProfileToMasterProfileNestedInput;

    @Field(() => MasterScheduleUncheckedUpdateManyWithoutMasterProfileNestedInput, {nullable:true})
    MasterSchedule?: MasterScheduleUncheckedUpdateManyWithoutMasterProfileNestedInput;

    @Field(() => MasterServiceUncheckedUpdateManyWithoutMasterProfileNestedInput, {nullable:true})
    MasterService?: MasterServiceUncheckedUpdateManyWithoutMasterProfileNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutMasterProfileNestedInput, {nullable:true})
    User?: UserUncheckedUpdateManyWithoutMasterProfileNestedInput;
}
