import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { directus_usersUpdateOneWithoutService_Service_user_updatedTodirectus_usersNestedInput } from '../directus-users/directus-users-update-one-without-service-service-user-updated-todirectus-users-nested.input';
import { Service_translationsUpdateManyWithoutServiceNestedInput } from '../service-translations/service-translations-update-many-without-service-nested.input';

@InputType()
export class ServiceUpdateWithoutDirectus_users_Service_user_createdTodirectus_usersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    sort?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_created?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_updated?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => directus_usersUpdateOneWithoutService_Service_user_updatedTodirectus_usersNestedInput, {nullable:true})
    directus_users_Service_user_updatedTodirectus_users?: directus_usersUpdateOneWithoutService_Service_user_updatedTodirectus_usersNestedInput;

    @Field(() => Service_translationsUpdateManyWithoutServiceNestedInput, {nullable:true})
    Service_translations?: Service_translationsUpdateManyWithoutServiceNestedInput;
}
