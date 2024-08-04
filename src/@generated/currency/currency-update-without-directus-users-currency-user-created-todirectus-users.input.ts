import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { AppointmentUpdateManyWithoutCurrencyNestedInput } from '../appointment/appointment-update-many-without-currency-nested.input';
import { directus_usersUpdateOneWithoutCurrency_Currency_user_updatedTodirectus_usersNestedInput } from '../directus-users/directus-users-update-one-without-currency-currency-user-updated-todirectus-users-nested.input';
import { MasterServiceUpdateManyWithoutCurrencyNestedInput } from '../master-service/master-service-update-many-without-currency-nested.input';

@InputType()
export class CurrencyUpdateWithoutDirectus_users_Currency_user_createdTodirectus_usersInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  status?: StringFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  sort?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_created?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_updated?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  code?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  character?: StringFieldUpdateOperationsInput;

  @Field(() => AppointmentUpdateManyWithoutCurrencyNestedInput, {
    nullable: true,
  })
  Appointment?: AppointmentUpdateManyWithoutCurrencyNestedInput;

  @Field(
    () =>
      directus_usersUpdateOneWithoutCurrency_Currency_user_updatedTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_users_Currency_user_updatedTodirectus_users?: directus_usersUpdateOneWithoutCurrency_Currency_user_updatedTodirectus_usersNestedInput;

  @Field(() => MasterServiceUpdateManyWithoutCurrencyNestedInput, {
    nullable: true,
  })
  MasterService?: MasterServiceUpdateManyWithoutCurrencyNestedInput;
}
