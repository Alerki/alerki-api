import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { directus_operationsUncheckedUpdateOneWithoutDirectus_operations_directus_operations_rejectTodirectus_operationsNestedInput } from './directus-operations-unchecked-update-one-without-directus-operations-directus-operations-reject-todirectus-operations-nested.input';
import { directus_operationsUncheckedUpdateOneWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsNestedInput } from './directus-operations-unchecked-update-one-without-directus-operations-directus-operations-resolve-todirectus-operations-nested.input';

@InputType()
export class directus_operationsUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  type?: StringFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  position_x?: IntFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  position_y?: IntFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  options?: any;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  resolve?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  reject?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  flow?: StringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_created?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  user_created?: NullableStringFieldUpdateOperationsInput;

  @Field(
    () =>
      directus_operationsUncheckedUpdateOneWithoutDirectus_operations_directus_operations_rejectTodirectus_operationsNestedInput,
    { nullable: true },
  )
  other_directus_operations_directus_operations_rejectTodirectus_operations?: directus_operationsUncheckedUpdateOneWithoutDirectus_operations_directus_operations_rejectTodirectus_operationsNestedInput;

  @Field(
    () =>
      directus_operationsUncheckedUpdateOneWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsNestedInput,
    { nullable: true },
  )
  other_directus_operations_directus_operations_resolveTodirectus_operations?: directus_operationsUncheckedUpdateOneWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsNestedInput;
}
