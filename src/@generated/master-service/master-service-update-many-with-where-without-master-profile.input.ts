import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterServiceScalarWhereInput } from './master-service-scalar-where.input';
import { Type } from 'class-transformer';
import { MasterServiceUpdateManyMutationInput } from './master-service-update-many-mutation.input';

@InputType()
export class MasterServiceUpdateManyWithWhereWithoutMasterProfileInput {
  @Field(() => MasterServiceScalarWhereInput, { nullable: false })
  @Type(() => MasterServiceScalarWhereInput)
  where!: MasterServiceScalarWhereInput;

  @Field(() => MasterServiceUpdateManyMutationInput, { nullable: false })
  @Type(() => MasterServiceUpdateManyMutationInput)
  data!: MasterServiceUpdateManyMutationInput;
}
