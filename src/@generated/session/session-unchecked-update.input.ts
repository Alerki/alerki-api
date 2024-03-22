import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { User_SessionUncheckedUpdateManyWithoutSessionNestedInput } from '../user-session/user-session-unchecked-update-many-without-session-nested.input';

@InputType()
export class SessionUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_created?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_updated?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    deviceName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    refreshToken?: StringFieldUpdateOperationsInput;

    @Field(() => User_SessionUncheckedUpdateManyWithoutSessionNestedInput, {nullable:true})
    User_Session?: User_SessionUncheckedUpdateManyWithoutSessionNestedInput;
}
