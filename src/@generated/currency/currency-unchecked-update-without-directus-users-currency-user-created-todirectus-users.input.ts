import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { AppointmentUncheckedUpdateManyWithoutCurrencyNestedInput } from '../appointment/appointment-unchecked-update-many-without-currency-nested.input';
import { MasterServiceUncheckedUpdateManyWithoutCurrencyNestedInput } from '../master-service/master-service-unchecked-update-many-without-currency-nested.input';

@InputType()
export class CurrencyUncheckedUpdateWithoutDirectus_users_Currency_user_createdTodirectus_usersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    sort?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_created?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    user_updated?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_updated?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    character?: StringFieldUpdateOperationsInput;

    @Field(() => AppointmentUncheckedUpdateManyWithoutCurrencyNestedInput, {nullable:true})
    Appointment?: AppointmentUncheckedUpdateManyWithoutCurrencyNestedInput;

    @Field(() => MasterServiceUncheckedUpdateManyWithoutCurrencyNestedInput, {nullable:true})
    MasterService?: MasterServiceUncheckedUpdateManyWithoutCurrencyNestedInput;
}
