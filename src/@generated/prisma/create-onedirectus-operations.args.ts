import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_operationsCreateInput } from '../directus-operations/directus-operations-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusOperationsArgs {
  @Field(() => directus_operationsCreateInput, { nullable: false })
  @Type(() => directus_operationsCreateInput)
  data!: directus_operationsCreateInput;
}
