import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';

@InputType()
export class UserSenderOnNotificationUncheckedUpdateManyWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_created?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_updated?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  notification?: StringFieldUpdateOperationsInput;
}
