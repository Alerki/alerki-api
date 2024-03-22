import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { directus_flowsUpdateOneRequiredWithoutDirectus_operationsNestedInput } from '../directus-flows/directus-flows-update-one-required-without-directus-operations-nested.input';
import { directus_operationsUpdateOneWithoutOther_directus_operations_directus_operations_rejectTodirectus_operationsNestedInput } from './directus-operations-update-one-without-other-directus-operations-directus-operations-reject-todirectus-operations-nested.input';
import { directus_operationsUpdateOneWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsNestedInput } from './directus-operations-update-one-without-other-directus-operations-directus-operations-resolve-todirectus-operations-nested.input';
import { directus_operationsUpdateOneWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsNestedInput } from './directus-operations-update-one-without-directus-operations-directus-operations-resolve-todirectus-operations-nested.input';
import { directus_usersUpdateOneWithoutDirectus_operationsNestedInput } from '../directus-users/directus-users-update-one-without-directus-operations-nested.input';

@InputType()
export class directus_operationsUpdateWithoutOther_directus_operations_directus_operations_rejectTodirectus_operationsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    key?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    position_x?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    position_y?: IntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_created?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => directus_flowsUpdateOneRequiredWithoutDirectus_operationsNestedInput, {nullable:true})
    directus_flows?: directus_flowsUpdateOneRequiredWithoutDirectus_operationsNestedInput;

    @Field(() => directus_operationsUpdateOneWithoutOther_directus_operations_directus_operations_rejectTodirectus_operationsNestedInput, {nullable:true})
    directus_operations_directus_operations_rejectTodirectus_operations?: directus_operationsUpdateOneWithoutOther_directus_operations_directus_operations_rejectTodirectus_operationsNestedInput;

    @Field(() => directus_operationsUpdateOneWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsNestedInput, {nullable:true})
    directus_operations_directus_operations_resolveTodirectus_operations?: directus_operationsUpdateOneWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsNestedInput;

    @Field(() => directus_operationsUpdateOneWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsNestedInput, {nullable:true})
    other_directus_operations_directus_operations_resolveTodirectus_operations?: directus_operationsUpdateOneWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsNestedInput;

    @Field(() => directus_usersUpdateOneWithoutDirectus_operationsNestedInput, {nullable:true})
    directus_users?: directus_usersUpdateOneWithoutDirectus_operationsNestedInput;
}
