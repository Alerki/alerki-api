import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserRecipientOnNotificationUncheckedUpdateManyWithoutNotificationNestedInput } from '../user-recipient-on-notification/user-recipient-on-notification-unchecked-update-many-without-notification-nested.input';

@InputType()
export class NotificationUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_created?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_updated?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserRecipientOnNotificationUncheckedUpdateManyWithoutNotificationNestedInput, {nullable:true})
    UserRecipientOnNotification?: UserRecipientOnNotificationUncheckedUpdateManyWithoutNotificationNestedInput;
}
