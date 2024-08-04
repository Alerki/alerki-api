import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NotificationTypeUpdateOneRequiredWithoutNotificationNestedInput } from '../notification-type/notification-type-update-one-required-without-notification-nested.input';

@InputType()
export class NotificationUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_created?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_updated?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(
    () => NotificationTypeUpdateOneRequiredWithoutNotificationNestedInput,
    { nullable: true },
  )
  NotificationType?: NotificationTypeUpdateOneRequiredWithoutNotificationNestedInput;
}
