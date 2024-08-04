import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentUncheckedCreateNestedManyWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput } from '../appointment/appointment-unchecked-create-nested-many-without-master-profile-appointment-master-profile-to-master-profile.input';
import { MasterScheduleUncheckedCreateNestedManyWithoutMasterProfileInput } from '../master-schedule/master-schedule-unchecked-create-nested-many-without-master-profile.input';
import { MasterServiceUncheckedCreateNestedManyWithoutMasterProfileInput } from '../master-service/master-service-unchecked-create-nested-many-without-master-profile.input';
import { UserUncheckedCreateNestedManyWithoutMasterProfileInput } from '../user/user-unchecked-create-nested-many-without-master-profile.input';

@InputType()
export class MasterProfileUncheckedCreateWithoutAppointment_Appointment_masterServiceToMasterProfileInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => String, { nullable: false })
  masterWeeklySchedule!: string;

  @Field(
    () =>
      AppointmentUncheckedCreateNestedManyWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput,
    { nullable: true },
  )
  Appointment_Appointment_masterProfileToMasterProfile?: AppointmentUncheckedCreateNestedManyWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput;

  @Field(
    () => MasterScheduleUncheckedCreateNestedManyWithoutMasterProfileInput,
    { nullable: true },
  )
  MasterSchedule?: MasterScheduleUncheckedCreateNestedManyWithoutMasterProfileInput;

  @Field(
    () => MasterServiceUncheckedCreateNestedManyWithoutMasterProfileInput,
    { nullable: true },
  )
  MasterService?: MasterServiceUncheckedCreateNestedManyWithoutMasterProfileInput;

  @Field(() => UserUncheckedCreateNestedManyWithoutMasterProfileInput, {
    nullable: true,
  })
  User?: UserUncheckedCreateNestedManyWithoutMasterProfileInput;
}
