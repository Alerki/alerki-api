import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutUserRecipientOnNotificationNestedInput } from '../user/user-update-one-required-without-user-recipient-on-notification-nested.input';

@InputType()
export class UserRecipientOnNotificationUpdateWithoutNotificationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_created?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_updated?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutUserRecipientOnNotificationNestedInput, {nullable:true})
    User?: UserUpdateOneRequiredWithoutUserRecipientOnNotificationNestedInput;
}
