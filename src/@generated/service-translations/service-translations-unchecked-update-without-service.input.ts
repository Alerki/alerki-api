import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MasterServiceUncheckedUpdateManyWithoutService_translationsNestedInput } from '../master-service/master-service-unchecked-update-many-without-service-translations-nested.input';

@InputType()
export class Service_translationsUncheckedUpdateWithoutServiceInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: IntFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  languages_id?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(
    () =>
      MasterServiceUncheckedUpdateManyWithoutService_translationsNestedInput,
    { nullable: true },
  )
  MasterService?: MasterServiceUncheckedUpdateManyWithoutService_translationsNestedInput;
}
