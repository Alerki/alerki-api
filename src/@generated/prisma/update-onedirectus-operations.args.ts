import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_operationsUpdateInput } from '../directus-operations/directus-operations-update.input';
import { Type } from 'class-transformer';
import { directus_operationsWhereUniqueInput } from '../directus-operations/directus-operations-where-unique.input';

@ArgsType()
export class UpdateOnedirectusOperationsArgs {
  @Field(() => directus_operationsUpdateInput, { nullable: false })
  @Type(() => directus_operationsUpdateInput)
  data!: directus_operationsUpdateInput;

  @Field(() => directus_operationsWhereUniqueInput, { nullable: false })
  @Type(() => directus_operationsWhereUniqueInput)
  where!: directus_operationsWhereUniqueInput;
}
