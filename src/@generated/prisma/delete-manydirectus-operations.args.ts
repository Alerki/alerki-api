import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_operationsWhereInput } from '../directus-operations/directus-operations-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusOperationsArgs {
  @Field(() => directus_operationsWhereInput, { nullable: true })
  @Type(() => directus_operationsWhereInput)
  where?: directus_operationsWhereInput;
}
