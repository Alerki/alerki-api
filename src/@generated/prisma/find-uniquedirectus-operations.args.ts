import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_operationsWhereUniqueInput } from '../directus-operations/directus-operations-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedirectusOperationsArgs {
  @Field(() => directus_operationsWhereUniqueInput, { nullable: false })
  @Type(() => directus_operationsWhereUniqueInput)
  where!: directus_operationsWhereUniqueInput;
}
