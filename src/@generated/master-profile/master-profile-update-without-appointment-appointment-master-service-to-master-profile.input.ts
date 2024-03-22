import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { AppointmentUpdateManyWithoutMasterProfile_Appointment_masterProfileToMasterProfileNestedInput } from '../appointment/appointment-update-many-without-master-profile-appointment-master-profile-to-master-profile-nested.input';
import { MasterWeeklyScheduleUpdateOneRequiredWithoutMasterProfileNestedInput } from '../master-weekly-schedule/master-weekly-schedule-update-one-required-without-master-profile-nested.input';
import { MasterScheduleUpdateManyWithoutMasterProfileNestedInput } from '../master-schedule/master-schedule-update-many-without-master-profile-nested.input';
import { MasterServiceUpdateManyWithoutMasterProfileNestedInput } from '../master-service/master-service-update-many-without-master-profile-nested.input';
import { UserUpdateManyWithoutMasterProfileNestedInput } from '../user/user-update-many-without-master-profile-nested.input';

@InputType()
export class MasterProfileUpdateWithoutAppointment_Appointment_masterServiceToMasterProfileInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_created?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_updated?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => AppointmentUpdateManyWithoutMasterProfile_Appointment_masterProfileToMasterProfileNestedInput, {nullable:true})
    Appointment_Appointment_masterProfileToMasterProfile?: AppointmentUpdateManyWithoutMasterProfile_Appointment_masterProfileToMasterProfileNestedInput;

    @Field(() => MasterWeeklyScheduleUpdateOneRequiredWithoutMasterProfileNestedInput, {nullable:true})
    MasterWeeklySchedule?: MasterWeeklyScheduleUpdateOneRequiredWithoutMasterProfileNestedInput;

    @Field(() => MasterScheduleUpdateManyWithoutMasterProfileNestedInput, {nullable:true})
    MasterSchedule?: MasterScheduleUpdateManyWithoutMasterProfileNestedInput;

    @Field(() => MasterServiceUpdateManyWithoutMasterProfileNestedInput, {nullable:true})
    MasterService?: MasterServiceUpdateManyWithoutMasterProfileNestedInput;

    @Field(() => UserUpdateManyWithoutMasterProfileNestedInput, {nullable:true})
    User?: UserUpdateManyWithoutMasterProfileNestedInput;
}
