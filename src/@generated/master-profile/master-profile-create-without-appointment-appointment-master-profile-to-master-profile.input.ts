import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentCreateNestedManyWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput } from '../appointment/appointment-create-nested-many-without-master-profile-appointment-master-service-to-master-profile.input';
import { MasterWeeklyScheduleCreateNestedOneWithoutMasterProfileInput } from '../master-weekly-schedule/master-weekly-schedule-create-nested-one-without-master-profile.input';
import { MasterScheduleCreateNestedManyWithoutMasterProfileInput } from '../master-schedule/master-schedule-create-nested-many-without-master-profile.input';
import { MasterServiceCreateNestedManyWithoutMasterProfileInput } from '../master-service/master-service-create-nested-many-without-master-profile.input';
import { UserCreateNestedManyWithoutMasterProfileInput } from '../user/user-create-nested-many-without-master-profile.input';

@InputType()
export class MasterProfileCreateWithoutAppointment_Appointment_masterProfileToMasterProfileInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(
    () =>
      AppointmentCreateNestedManyWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput,
    { nullable: true },
  )
  Appointment_Appointment_masterServiceToMasterProfile?: AppointmentCreateNestedManyWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput;

  @Field(() => MasterWeeklyScheduleCreateNestedOneWithoutMasterProfileInput, {
    nullable: false,
  })
  MasterWeeklySchedule!: MasterWeeklyScheduleCreateNestedOneWithoutMasterProfileInput;

  @Field(() => MasterScheduleCreateNestedManyWithoutMasterProfileInput, {
    nullable: true,
  })
  MasterSchedule?: MasterScheduleCreateNestedManyWithoutMasterProfileInput;

  @Field(() => MasterServiceCreateNestedManyWithoutMasterProfileInput, {
    nullable: true,
  })
  MasterService?: MasterServiceCreateNestedManyWithoutMasterProfileInput;

  @Field(() => UserCreateNestedManyWithoutMasterProfileInput, {
    nullable: true,
  })
  User?: UserCreateNestedManyWithoutMasterProfileInput;
}
