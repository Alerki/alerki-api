import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class directus_revisionsUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  collection?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  item?: StringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  data?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  delta?: any;
}
