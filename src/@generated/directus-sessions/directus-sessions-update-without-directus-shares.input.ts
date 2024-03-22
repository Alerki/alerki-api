import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { directus_usersUpdateOneWithoutDirectus_sessionsNestedInput } from '../directus-users/directus-users-update-one-without-directus-sessions-nested.input';

@InputType()
export class directus_sessionsUpdateWithoutDirectus_sharesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expires?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    ip?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    user_agent?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    origin?: NullableStringFieldUpdateOperationsInput;

    @Field(() => directus_usersUpdateOneWithoutDirectus_sessionsNestedInput, {nullable:true})
    directus_users?: directus_usersUpdateOneWithoutDirectus_sessionsNestedInput;
}
