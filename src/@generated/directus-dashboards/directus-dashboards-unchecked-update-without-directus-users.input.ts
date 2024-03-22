import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { directus_panelsUncheckedUpdateManyWithoutDirectus_dashboardsNestedInput } from '../directus-panels/directus-panels-unchecked-update-many-without-directus-dashboards-nested.input';

@InputType()
export class directus_dashboardsUncheckedUpdateWithoutDirectus_usersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    icon?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    note?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_created?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    color?: NullableStringFieldUpdateOperationsInput;

    @Field(() => directus_panelsUncheckedUpdateManyWithoutDirectus_dashboardsNestedInput, {nullable:true})
    directus_panels?: directus_panelsUncheckedUpdateManyWithoutDirectus_dashboardsNestedInput;
}
