import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_operationsWhereInput } from '../directus-operations/directus-operations-where.input';

@InputType()
export class Directus_operationsListRelationFilter {
  @Field(() => directus_operationsWhereInput, { nullable: true })
  every?: directus_operationsWhereInput;

  @Field(() => directus_operationsWhereInput, { nullable: true })
  some?: directus_operationsWhereInput;

  @Field(() => directus_operationsWhereInput, { nullable: true })
  none?: directus_operationsWhereInput;
}
