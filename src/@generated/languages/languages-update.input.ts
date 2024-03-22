import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { Service_translationsUpdateManyWithoutLanguagesNestedInput } from '../service-translations/service-translations-update-many-without-languages-nested.input';

@InputType()
export class languagesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    direction?: NullableStringFieldUpdateOperationsInput;

    @Field(() => Service_translationsUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    Service_translations?: Service_translationsUpdateManyWithoutLanguagesNestedInput;
}
