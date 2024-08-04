import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { CurrencyUpdateOneRequiredWithoutMasterServiceNestedInput } from '../currency/currency-update-one-required-without-master-service-nested.input';
import { MasterProfileUpdateOneRequiredWithoutMasterServiceNestedInput } from '../master-profile/master-profile-update-one-required-without-master-service-nested.input';

@InputType()
export class MasterServiceUpdateWithoutService_translationsInput {
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

  @Field(() => CurrencyUpdateOneRequiredWithoutMasterServiceNestedInput, {
    nullable: true,
  })
  Currency?: CurrencyUpdateOneRequiredWithoutMasterServiceNestedInput;

  @Field(() => MasterProfileUpdateOneRequiredWithoutMasterServiceNestedInput, {
    nullable: true,
  })
  MasterProfile?: MasterProfileUpdateOneRequiredWithoutMasterServiceNestedInput;
}
