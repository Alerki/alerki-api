import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { MasterProfileUpdateOneRequiredWithoutMasterServiceNestedInput } from '../master-profile/master-profile-update-one-required-without-master-service-nested.input';
import { Service_translationsUpdateOneRequiredWithoutMasterServiceNestedInput } from '../service-translations/service-translations-update-one-required-without-master-service-nested.input';

@InputType()
export class MasterServiceUpdateWithoutCurrencyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  status?: StringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_created?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_updated?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  duration?: DateTimeFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  price?: IntFieldUpdateOperationsInput;

  @Field(() => MasterProfileUpdateOneRequiredWithoutMasterServiceNestedInput, {
    nullable: true,
  })
  MasterProfile?: MasterProfileUpdateOneRequiredWithoutMasterServiceNestedInput;

  @Field(
    () => Service_translationsUpdateOneRequiredWithoutMasterServiceNestedInput,
    { nullable: true },
  )
  Service_translations?: Service_translationsUpdateOneRequiredWithoutMasterServiceNestedInput;
}
