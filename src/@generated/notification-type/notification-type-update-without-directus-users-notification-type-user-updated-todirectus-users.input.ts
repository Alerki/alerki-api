import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { directus_usersUpdateOneWithoutNotificationType_NotificationType_user_createdTodirectus_usersNestedInput } from '../directus-users/directus-users-update-one-without-notification-type-notification-type-user-created-todirectus-users-nested.input';

@InputType()
export class NotificationTypeUpdateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    sort?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_created?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_updated?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => directus_usersUpdateOneWithoutNotificationType_NotificationType_user_createdTodirectus_usersNestedInput, {nullable:true})
    directus_users_NotificationType_user_createdTodirectus_users?: directus_usersUpdateOneWithoutNotificationType_NotificationType_user_createdTodirectus_usersNestedInput;
}
