import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { CurrencyUpdateOneRequiredWithoutAppointmentNestedInput } from '../currency/currency-update-one-required-without-appointment-nested.input';
import { MasterProfileUpdateOneRequiredWithoutAppointment_Appointment_masterProfileToMasterProfileNestedInput } from '../master-profile/master-profile-update-one-required-without-appointment-appointment-master-profile-to-master-profile-nested.input';
import { MasterProfileUpdateOneRequiredWithoutAppointment_Appointment_masterServiceToMasterProfileNestedInput } from '../master-profile/master-profile-update-one-required-without-appointment-appointment-master-service-to-master-profile-nested.input';

@InputType()
export class AppointmentUpdateWithoutClientProfileInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_created?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_updated?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  duration?: DateTimeFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  price?: IntFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  startAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  endAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  confirmed?: BoolFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  cancelled?: BoolFieldUpdateOperationsInput;

  @Field(() => CurrencyUpdateOneRequiredWithoutAppointmentNestedInput, {
    nullable: true,
  })
  Currency?: CurrencyUpdateOneRequiredWithoutAppointmentNestedInput;

  @Field(
    () =>
      MasterProfileUpdateOneRequiredWithoutAppointment_Appointment_masterProfileToMasterProfileNestedInput,
    { nullable: true },
  )
  MasterProfile_Appointment_masterProfileToMasterProfile?: MasterProfileUpdateOneRequiredWithoutAppointment_Appointment_masterProfileToMasterProfileNestedInput;

  @Field(
    () =>
      MasterProfileUpdateOneRequiredWithoutAppointment_Appointment_masterServiceToMasterProfileNestedInput,
    { nullable: true },
  )
  MasterProfile_Appointment_masterServiceToMasterProfile?: MasterProfileUpdateOneRequiredWithoutAppointment_Appointment_masterServiceToMasterProfileNestedInput;
}
