import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_flowsUpdateManyMutationInput } from '../directus-flows/directus-flows-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_flowsWhereInput } from '../directus-flows/directus-flows-where.input';

@ArgsType()
export class UpdateManydirectusFlowsArgs {
  @Field(() => directus_flowsUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_flowsUpdateManyMutationInput)
  data!: directus_flowsUpdateManyMutationInput;

  @Field(() => directus_flowsWhereInput, { nullable: true })
  @Type(() => directus_flowsWhereInput)
  where?: directus_flowsWhereInput;
}
