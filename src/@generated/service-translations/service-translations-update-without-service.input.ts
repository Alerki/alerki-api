import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MasterServiceUpdateManyWithoutService_translationsNestedInput } from '../master-service/master-service-update-many-without-service-translations-nested.input';
import { languagesUpdateOneWithoutService_translationsNestedInput } from '../languages/languages-update-one-without-service-translations-nested.input';

@InputType()
export class Service_translationsUpdateWithoutServiceInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => MasterServiceUpdateManyWithoutService_translationsNestedInput, {nullable:true})
    MasterService?: MasterServiceUpdateManyWithoutService_translationsNestedInput;

    @Field(() => languagesUpdateOneWithoutService_translationsNestedInput, {nullable:true})
    languages?: languagesUpdateOneWithoutService_translationsNestedInput;
}
