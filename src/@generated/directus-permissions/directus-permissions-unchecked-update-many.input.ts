import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class directus_permissionsUncheckedUpdateManyInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: IntFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  role?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  collection?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  action?: StringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  permissions?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  validation?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  presets?: any;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  fields?: NullableStringFieldUpdateOperationsInput;
}
