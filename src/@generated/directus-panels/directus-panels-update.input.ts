import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { directus_dashboardsUpdateOneRequiredWithoutDirectus_panelsNestedInput } from '../directus-dashboards/directus-dashboards-update-one-required-without-directus-panels-nested.input';
import { directus_usersUpdateOneWithoutDirectus_panelsNestedInput } from '../directus-users/directus-users-update-one-without-directus-panels-nested.input';

@InputType()
export class directus_panelsUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  icon?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  color?: NullableStringFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  show_header?: BoolFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  note?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  type?: StringFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  position_x?: IntFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  position_y?: IntFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  width?: IntFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  height?: IntFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  options?: any;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_created?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(
    () => directus_dashboardsUpdateOneRequiredWithoutDirectus_panelsNestedInput,
    { nullable: true },
  )
  directus_dashboards?: directus_dashboardsUpdateOneRequiredWithoutDirectus_panelsNestedInput;

  @Field(() => directus_usersUpdateOneWithoutDirectus_panelsNestedInput, {
    nullable: true,
  })
  directus_users?: directus_usersUpdateOneWithoutDirectus_panelsNestedInput;
}
