import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { Service_translationsUncheckedUpdateManyWithoutLanguagesNestedInput } from '../service-translations/service-translations-unchecked-update-many-without-languages-nested.input';

@InputType()
export class languagesUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  code?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  direction?: NullableStringFieldUpdateOperationsInput;

  @Field(
    () => Service_translationsUncheckedUpdateManyWithoutLanguagesNestedInput,
    { nullable: true },
  )
  Service_translations?: Service_translationsUncheckedUpdateManyWithoutLanguagesNestedInput;
}
