import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutUserPictureNestedInput } from '../user/user-unchecked-update-many-without-user-picture-nested.input';

@InputType()
export class UserPictureUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_created?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_updated?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    picture?: StringFieldUpdateOperationsInput;

    @Field(() => UserUncheckedUpdateManyWithoutUserPictureNestedInput, {nullable:true})
    User?: UserUncheckedUpdateManyWithoutUserPictureNestedInput;
}
