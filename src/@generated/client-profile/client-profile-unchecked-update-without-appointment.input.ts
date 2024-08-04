import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutClientProfileNestedInput } from '../user/user-unchecked-update-many-without-client-profile-nested.input';

@InputType()
export class ClientProfileUncheckedUpdateWithoutAppointmentInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_created?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_updated?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => UserUncheckedUpdateManyWithoutClientProfileNestedInput, {
    nullable: true,
  })
  User?: UserUncheckedUpdateManyWithoutClientProfileNestedInput;
}
