import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentUncheckedCreateNestedManyWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput } from '../appointment/appointment-unchecked-create-nested-many-without-master-profile-appointment-master-profile-to-master-profile.input';
import { AppointmentUncheckedCreateNestedManyWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput } from '../appointment/appointment-unchecked-create-nested-many-without-master-profile-appointment-master-service-to-master-profile.input';
import { MasterScheduleUncheckedCreateNestedManyWithoutMasterProfileInput } from '../master-schedule/master-schedule-unchecked-create-nested-many-without-master-profile.input';
import { UserUncheckedCreateNestedManyWithoutMasterProfileInput } from '../user/user-unchecked-create-nested-many-without-master-profile.input';

@InputType()
export class MasterProfileUncheckedCreateWithoutMasterServiceInput {
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
    () =>
      AppointmentUncheckedCreateNestedManyWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput,
    { nullable: true },
  )
  Appointment_Appointment_masterServiceToMasterProfile?: AppointmentUncheckedCreateNestedManyWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput;

  @Field(
    () => MasterScheduleUncheckedCreateNestedManyWithoutMasterProfileInput,
    { nullable: true },
  )
  MasterSchedule?: MasterScheduleUncheckedCreateNestedManyWithoutMasterProfileInput;

  @Field(() => UserUncheckedCreateNestedManyWithoutMasterProfileInput, {
    nullable: true,
  })
  User?: UserUncheckedCreateNestedManyWithoutMasterProfileInput;
}
