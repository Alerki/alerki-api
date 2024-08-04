import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { directus_usersUpdateOneRequiredWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersNestedInput } from '../directus-users/directus-users-update-one-required-without-directus-notifications-directus-notifications-recipient-todirectus-users-nested.input';

@InputType()
export class directus_notificationsUpdateWithoutDirectus_users_directus_notifications_senderTodirectus_usersInput {
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  timestamp?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  status?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  subject?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  message?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  collection?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  item?: NullableStringFieldUpdateOperationsInput;

  @Field(
    () =>
      directus_usersUpdateOneRequiredWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_users_directus_notifications_recipientTodirectus_users?: directus_usersUpdateOneRequiredWithoutDirectus_notifications_directus_notifications_recipientTodirectus_usersNestedInput;
}
