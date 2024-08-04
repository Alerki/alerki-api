import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_operationsUpdateManyMutationInput } from '../directus-operations/directus-operations-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_operationsWhereInput } from '../directus-operations/directus-operations-where.input';

@ArgsType()
export class UpdateManydirectusOperationsArgs {
  @Field(() => directus_operationsUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_operationsUpdateManyMutationInput)
  data!: directus_operationsUpdateManyMutationInput;

  @Field(() => directus_operationsWhereInput, { nullable: true })
  @Type(() => directus_operationsWhereInput)
  where?: directus_operationsWhereInput;
}
