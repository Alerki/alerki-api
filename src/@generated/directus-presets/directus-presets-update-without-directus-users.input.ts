import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { directus_rolesUpdateOneWithoutDirectus_presetsNestedInput } from '../directus-roles/directus-roles-update-one-without-directus-presets-nested.input';

@InputType()
export class directus_presetsUpdateWithoutDirectus_usersInput {
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  bookmark?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  collection?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  search?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  layout?: NullableStringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  layout_query?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  layout_options?: any;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  refresh_interval?: NullableIntFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  filter?: any;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  icon?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  color?: NullableStringFieldUpdateOperationsInput;

  @Field(() => directus_rolesUpdateOneWithoutDirectus_presetsNestedInput, {
    nullable: true,
  })
  directus_roles?: directus_rolesUpdateOneWithoutDirectus_presetsNestedInput;
}
