import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneWithoutService_translationsNestedInput } from '../languages/languages-update-one-without-service-translations-nested.input';
import { ServiceUpdateOneWithoutService_translationsNestedInput } from '../service/service-update-one-without-service-translations-nested.input';

@InputType()
export class Service_translationsUpdateWithoutMasterServiceInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => languagesUpdateOneWithoutService_translationsNestedInput, {
    nullable: true,
  })
  languages?: languagesUpdateOneWithoutService_translationsNestedInput;

  @Field(() => ServiceUpdateOneWithoutService_translationsNestedInput, {
    nullable: true,
  })
  Service?: ServiceUpdateOneWithoutService_translationsNestedInput;
}
